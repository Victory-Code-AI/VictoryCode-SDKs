import Foundation

public struct VictoryCodeConfiguration {
    public let baseURL: String
    public let appId: String?
    public let appSecret: String?
    public var appToken: String?

    public init(baseURL: String, appId: String?, appSecret: String?, appToken: String?) {
        self.baseURL = baseURL.replacingOccurrences(of: "/+$", with: "", options: .regularExpression)
        self.appId = appId
        self.appSecret = appSecret
        self.appToken = appToken
    }

    public static func fromEnvironment() throws -> VictoryCodeConfiguration {
        let env = ProcessInfo.processInfo.environment

        guard let baseURL = env["VICTORYCODE_API_BASE_URL"], !baseURL.isEmpty else {
            throw VictoryCodeSDKError.missingConfiguration("VICTORYCODE_API_BASE_URL")
        }

        return VictoryCodeConfiguration(
            baseURL: baseURL,
            appId: env["VICTORYCODE_APP_ID"],
            appSecret: env["VICTORYCODE_APP_SECRET"],
            appToken: env["VICTORYCODE_APP_TOKEN"]
        )
    }
}
