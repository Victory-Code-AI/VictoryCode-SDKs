// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "VictoryCodeSDK",
    platforms: [
        .iOS(.v15),
        .macOS(.v13)
    ],
    products: [
        .library(name: "VictoryCodeSDK", targets: ["VictoryCodeSDK"])
    ],
    targets: [
        .target(name: "VictoryCodeSDK", path: "Sources/VictoryCodeSDK")
    ]
)
