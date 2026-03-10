import Foundation

public enum VictoryCodeSDKError: Error, LocalizedError {
    case missingConfiguration(String)
    case invalidURL(String)
    case network(Error)
    case invalidResponse
    case api(statusCode: Int, message: String, payload: [String: Any])

    public var errorDescription: String? {
        switch self {
        case .missingConfiguration(let key):
            return "Missing required configuration: \(key)"
        case .invalidURL(let value):
            return "Invalid URL: \(value)"
        case .network(let error):
            return "Network error: \(error.localizedDescription)"
        case .invalidResponse:
            return "Invalid API response payload"
        case .api(let statusCode, let message, _):
            return "HTTP \(statusCode): \(message)"
        }
    }
}
