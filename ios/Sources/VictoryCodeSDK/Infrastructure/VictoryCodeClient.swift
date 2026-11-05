// Hand-written helper (overrides/ios): survives regeneration.

import Foundation
#if canImport(FoundationNetworking)
import FoundationNetworking
#endif

public extension VictoryCodeSDKAPIConfiguration {
    /// A configuration that handles authentication and throttling for you:
    ///
    /// - gets an access token with your App-Id and App-Secret, reuses it until shortly before it
    ///   expires (tokens last 1 hour), and gets a new one after a 401;
    /// - retries `429 Too Many Requests` with exponential backoff, and retries server errors and
    ///   network failures for requests that are safe to repeat (never a POST).
    ///
    /// ```swift
    /// let config = VictoryCodeSDKAPIConfiguration.victoryCode(appId: appId, appSecret: appSecret,
    ///                                                          basePath: "https://api.tactixai.com")
    /// let games = try await GamesAPI(apiConfiguration: config).getGames(limit: 10, offset: 0)
    /// ```
    static func victoryCode(
        appId: String,
        appSecret: String,
        basePath: String = "https://sandbox.api.tactixai.com",
        maxRetries: Int = 4
    ) -> VictoryCodeSDKAPIConfiguration {
        let base = basePath.hasSuffix("/") ? String(basePath.dropLast()) : basePath
        return VictoryCodeSDKAPIConfiguration(
            basePath: base,
            interceptor: VictoryCodeInterceptor(appId: appId, appSecret: appSecret, basePath: base, maxRetries: maxRetries)
        )
    }
}

/// Adds App-Id and a cached access token to every request, and retries throttled or failed requests.
public final class VictoryCodeInterceptor: OpenAPIInterceptor, @unchecked Sendable {
    static let tokenPath = "/api/v1/client/auth/token"
    private static let refreshMargin: TimeInterval = 60
    private static let idempotentMethods: Set<String> = ["GET", "HEAD", "OPTIONS", "PUT", "DELETE"]
    private static let retryableServerErrors: Set<Int> = [500, 502, 503, 504]

    private let appId: String
    private let appSecret: String
    private let basePath: String
    private let maxRetries: Int
    private let session: URLSession
    private let lock = NSLock()

    private struct PerRequest {
        var attempts = 0
        var renewedToken = false
    }

    private var token: String?
    private var refreshAt = Date.distantPast
    private var waiting: [@Sendable (Result<String, Error>) -> Void] = []
    private var requests: [ObjectIdentifier: PerRequest] = [:]

    public init(appId: String, appSecret: String, basePath: String, maxRetries: Int = 4, session: URLSession = .shared) {
        self.appId = appId
        self.appSecret = appSecret
        self.basePath = basePath
        self.maxRetries = maxRetries
        self.session = session
    }

    /// Forget the cached token; the next call requests a new one.
    public func invalidateToken() {
        lock.lock()
        token = nil
        lock.unlock()
    }

    /// The current access token, requesting a new one when needed. Parallel callers share one request.
    public func accessToken(completion: @Sendable @escaping (Result<String, Error>) -> Void) {
        lock.lock()
        if let token, Date() < refreshAt {
            lock.unlock()
            completion(.success(token))
            return
        }
        waiting.append(completion)
        let first = waiting.count == 1
        lock.unlock()
        if first { requestToken() }
    }

    private func requestToken() {
        guard let url = URL(string: basePath + Self.tokenPath) else {
            finishTokenRequest(.failure(URLError(.badURL)))
            return
        }
        var request = URLRequest(url: url)
        request.setValue(appId, forHTTPHeaderField: "App-Id")
        request.setValue(appSecret, forHTTPHeaderField: "App-Secret")
        request.setValue("application/json", forHTTPHeaderField: "Accept")
        sendToken(request, attempt: 0)
    }

    private func sendToken(_ request: URLRequest, attempt: Int) {
        session.dataTask(with: request) { data, response, error in
            let status = (response as? HTTPURLResponse)?.statusCode ?? -1
            if (status == 429 || Self.retryableServerErrors.contains(status) || error != nil), attempt < self.maxRetries {
                DispatchQueue.global().asyncAfter(deadline: .now() + Self.backoff(attempt)) {
                    self.sendToken(request, attempt: attempt + 1)
                }
                return
            }
            guard status == 200, let data,
                  let body = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                  let accessToken = body["accessToken"] as? String
            else {
                self.finishTokenRequest(.failure(error ?? ErrorResponse.error(status, data, response, DecodableRequestBuilderError.unsuccessfulHTTPStatusCode)))
                return
            }
            let lifetime = (body["expiresIn"] as? Double) ?? 3600
            self.lock.lock()
            self.token = accessToken
            self.refreshAt = Date().addingTimeInterval(max(lifetime - Self.refreshMargin, lifetime / 2))
            self.lock.unlock()
            self.finishTokenRequest(.success(accessToken))
        }.resume()
    }

    private func finishTokenRequest(_ result: Result<String, Error>) {
        lock.lock()
        let callbacks = waiting
        waiting = []
        lock.unlock()
        callbacks.forEach { $0(result) }
    }

    /// About 1 s, 2 s, 4 s… capped at 30 s, with jitter.
    private static func backoff(_ attempt: Int) -> TimeInterval {
        min(pow(2, Double(attempt)), 30) * Double.random(in: 0.5...1)
    }

    // MARK: - OpenAPIInterceptor

    public func intercept<T>(urlRequest: URLRequest, urlSession: URLSessionProtocol, requestBuilder: RequestBuilder<T>, completion: @Sendable @escaping (Result<URLRequest, Error>) -> Void) {
        var request = urlRequest
        if request.value(forHTTPHeaderField: "App-Id") == nil {
            request.setValue(appId, forHTTPHeaderField: "App-Id")
        }
        if request.url?.path.hasSuffix(Self.tokenPath) == true {
            request.setValue(appSecret, forHTTPHeaderField: "App-Secret")
            completion(.success(request))
            return
        }
        let prepared = request
        accessToken { result in
            completion(result.map { token in
                var authorized = prepared
                authorized.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
                return authorized
            })
        }
    }

    public func retry<T>(urlRequest: URLRequest, urlSession: URLSessionProtocol, requestBuilder: RequestBuilder<T>, data: Data?, response: URLResponse?, error: Error, completion: @Sendable @escaping (OpenAPIInterceptorRetry) -> Void) {
        let key = ObjectIdentifier(requestBuilder)
        let status = (response as? HTTPURLResponse)?.statusCode ?? -1
        let method = (urlRequest.httpMethod ?? "GET").uppercased()
        let idempotent = Self.idempotentMethods.contains(method)
        let isTokenRequest = urlRequest.url?.path.hasSuffix(Self.tokenPath) == true

        lock.lock()
        var state = requests[key] ?? PerRequest()
        if status == 401, !isTokenRequest, !state.renewedToken {
            // The token was revoked or expired early: get a new one and try once more.
            state.renewedToken = true
            requests[key] = state
            token = nil
            lock.unlock()
            completion(.retry)
            return
        }
        let retryable = status == 429
            || (idempotent && Self.retryableServerErrors.contains(status))
            || (idempotent && response == nil)
        guard retryable, state.attempts < maxRetries else {
            requests[key] = nil
            lock.unlock()
            completion(.dontRetry)
            return
        }
        let attempt = state.attempts
        state.attempts += 1
        requests[key] = state
        lock.unlock()
        DispatchQueue.global().asyncAfter(deadline: .now() + Self.backoff(attempt)) {
            completion(.retry)
        }
    }

    public func didComplete<T>(urlRequest: URLRequest, urlSession: URLSessionProtocol, requestBuilder: RequestBuilder<T>, data: Data?, response: URLResponse?, result: Result<T, Error>) {
        lock.lock()
        requests[ObjectIdentifier(requestBuilder)] = nil
        lock.unlock()
    }
}
