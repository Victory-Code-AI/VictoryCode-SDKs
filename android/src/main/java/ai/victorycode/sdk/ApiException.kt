package ai.victorycode.sdk

class ApiException(
    val statusCode: Int,
    val payload: String,
    message: String,
) : RuntimeException("HTTP $statusCode: $message")
