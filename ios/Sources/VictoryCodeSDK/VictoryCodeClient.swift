import Foundation

public final class VictoryCodeClient {
    private var config: VictoryCodeConfiguration
    private let session: URLSession

    public init(config: VictoryCodeConfiguration, session: URLSession = .shared) {
        self.config = config
        self.session = session
    }

    // Auth
    public func generateAccessToken() async throws -> [String: Any] {
        let appId = try require(config.appId, key: "VICTORYCODE_APP_ID")
        let appSecret = try require(config.appSecret, key: "VICTORYCODE_APP_SECRET")

        let payload = try await requestJSON(
            method: "GET",
            path: "/api/v1/client/auth/token",
            headers: [
                "app-id": appId,
                "app-secret": appSecret,
            ]
        )

        if let token = payload["token"] as? String {
            config = VictoryCodeConfiguration(
                baseURL: config.baseURL,
                appId: config.appId,
                appSecret: config.appSecret,
                appToken: token
            )
        }

        return payload
    }

    // Granular Play-by-Play
    public func getUploadStatus(uploadId: String) async throws -> [String: Any] {
        try await requestJSON(
            method: "GET",
            path: "/api/v1/client/uploads/\(uploadId)",
            headers: try tokenHeaders()
        )
    }

    public func uploadVideoAndCreateGame(
        name: String,
        videoURL: URL,
        homeTeam: String,
        awayTeam: String,
        venue: String,
        location: String,
        description: String? = nil
    ) async throws -> [String: Any] {
        let boundary = "Boundary-\(UUID().uuidString)"

        var fields: [String: String] = [
            "name": name,
            "homeTeam": homeTeam,
            "awayTeam": awayTeam,
            "venue": venue,
            "location": location,
        ]

        if let description, !description.isEmpty {
            fields["description"] = description
        }

        let body = try buildMultipartBody(
            fields: fields,
            fileField: "video",
            fileURL: videoURL,
            boundary: boundary
        )

        var headers = try tokenHeaders(includeAccept: false)
        headers["Content-Type"] = "multipart/form-data; boundary=\(boundary)"

        return try await requestJSON(
            method: "POST",
            path: "/api/v1/client/uploads",
            headers: headers,
            body: body
        )
    }

    public func getGame(gameId: String) async throws -> [String: Any] {
        try await requestJSON(
            method: "GET",
            path: "/api/v1/client/games/\(gameId)",
            headers: try tokenHeaders()
        )
    }

    public func listGames(limit: Int = 10, page: Int = 1) async throws -> [String: Any] {
        try await requestJSON(
            method: "GET",
            path: "/api/v1/client/games",
            headers: try tokenHeaders(),
            query: [
                URLQueryItem(name: "limit", value: String(limit)),
                URLQueryItem(name: "page", value: String(page)),
            ]
        )
    }

    // Aggregated Game Recaps
    public func getGameRecapScore(gameId: String) async throws -> [String: Any] {
        try await requestJSON(
            method: "GET",
            path: "/api/v1/client/game-recap/\(gameId)/score",
            headers: try tokenHeaders()
        )
    }

    public func getGameRecapScoringSummary(gameId: String) async throws -> [String: Any] {
        try await requestJSON(
            method: "GET",
            path: "/api/v1/client/game-recap/\(gameId)/scoring-summary",
            headers: try tokenHeaders()
        )
    }

    public func getGameRecapTeamStats(gameId: String) async throws -> [String: Any] {
        try await requestJSON(
            method: "GET",
            path: "/api/v1/client/game-recap/\(gameId)/team-stats",
            headers: try tokenHeaders()
        )
    }

    private func requestJSON(
        method: String,
        path: String,
        headers: [String: String],
        query: [URLQueryItem] = [],
        body: Data? = nil
    ) async throws -> [String: Any] {
        guard var components = URLComponents(string: config.baseURL + path) else {
            throw VictoryCodeSDKError.invalidURL(config.baseURL + path)
        }
        if !query.isEmpty {
            components.queryItems = query
        }

        guard let url = components.url else {
            throw VictoryCodeSDKError.invalidURL(config.baseURL + path)
        }

        var request = URLRequest(url: url)
        request.httpMethod = method
        request.httpBody = body

        headers.forEach { key, value in
            request.setValue(value, forHTTPHeaderField: key)
        }

        let data: Data
        let response: URLResponse
        do {
            (data, response) = try await session.data(for: request)
        } catch {
            throw VictoryCodeSDKError.network(error)
        }

        guard let httpResponse = response as? HTTPURLResponse else {
            throw VictoryCodeSDKError.invalidResponse
        }

        let payload = try decodeJSONObject(data)
        if !(200..<300).contains(httpResponse.statusCode) {
            let message = payload["message"] as? String
                ?? (payload["error"] as? [String: Any])?["message"] as? String
                ?? "Request failed"
            throw VictoryCodeSDKError.api(statusCode: httpResponse.statusCode, message: message, payload: payload)
        }

        return payload
    }

    private func decodeJSONObject(_ data: Data) throws -> [String: Any] {
        if data.isEmpty {
            return [:]
        }

        let object = try JSONSerialization.jsonObject(with: data)
        guard let dictionary = object as? [String: Any] else {
            throw VictoryCodeSDKError.invalidResponse
        }
        return dictionary
    }

    private func tokenHeaders(includeAccept: Bool = true) throws -> [String: String] {
        let appId = try require(config.appId, key: "VICTORYCODE_APP_ID")
        let appToken = try require(config.appToken, key: "VICTORYCODE_APP_TOKEN")

        var headers: [String: String] = [
            "App-Id": appId,
            "App-Token": appToken,
        ]
        if includeAccept {
            headers["Accept"] = "application/json"
        }
        return headers
    }

    private func buildMultipartBody(
        fields: [String: String],
        fileField: String,
        fileURL: URL,
        boundary: String
    ) throws -> Data {
        var body = Data()
        let newLine = "\r\n"

        for (key, value) in fields {
            body.append("--\(boundary)\(newLine)".data(using: .utf8)!)
            body.append("Content-Disposition: form-data; name=\"\(key)\"\(newLine + newLine)".data(using: .utf8)!)
            body.append("\(value)\(newLine)".data(using: .utf8)!)
        }

        let fileData = try Data(contentsOf: fileURL)
        body.append("--\(boundary)\(newLine)".data(using: .utf8)!)
        body.append(
            "Content-Disposition: form-data; name=\"\(fileField)\"; filename=\"\(fileURL.lastPathComponent)\"\(newLine)".data(using: .utf8)!
        )
        body.append("Content-Type: application/octet-stream\(newLine + newLine)".data(using: .utf8)!)
        body.append(fileData)
        body.append(newLine.data(using: .utf8)!)
        body.append("--\(boundary)--\(newLine)".data(using: .utf8)!)
        return body
    }

    private func require(_ value: String?, key: String) throws -> String {
        guard let value, !value.isEmpty else {
            throw VictoryCodeSDKError.missingConfiguration(key)
        }
        return value
    }
}
