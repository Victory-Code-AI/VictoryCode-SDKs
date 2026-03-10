package ai.victorycode.sdk;

import java.nio.file.Path;

public record UploadVideoRequest(
    String name,
    Path videoPath,
    String homeTeam,
    String awayTeam,
    String venue,
    String location,
    String description
) {}
