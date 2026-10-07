#!/usr/bin/env node
/*
 * Decides what the regenerate workflow should build, using the developer
 * portal's specs/manifest.json (checked out at the published commit) as the
 * source of truth.
 *
 *   node scripts/resolve-release.mjs <portal checkout dir>
 *
 * Reads the triggering event from $GITHUB_EVENT_PATH:
 *  - repository_dispatch "api-spec-published" (sent by the portal admin), or
 *  - workflow_dispatch with optional `version` / `breaking` inputs.
 * SDKs only ship the stable production API: the version must be the portal's
 * latest, have status "current" (not beta, deprecated or sunset) and list a
 * Production server. Anything else (e.g. a beta on Sandbox/UAT) resolves to
 * release=false with the reason.
 * Writes key=value lines to stdout and $GITHUB_OUTPUT.
 */
import { appendFileSync, existsSync, readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const portalDir = process.argv[2];
const manifestPath = path.join(portalDir ?? "", "specs", "manifest.json");
if (!portalDir || !existsSync(manifestPath)) {
  console.error(`No specs/manifest.json under '${portalDir ?? ""}'.`);
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const event = process.env.GITHUB_EVENT_PATH ? JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, "utf8")) : {};
const payload = event.client_payload ?? {};
const inputs = event.inputs ?? {};

const versionId = payload.version || inputs.version || manifest.latest;
const entry = manifest.versions.find((version) => version.id === versionId);
if (!entry) {
  console.error(`Version '${versionId}' is not in the portal manifest.`);
  process.exit(1);
}

const specPath = path.join(portalDir, "specs", entry.id, "openapi.json");
const servers = existsSync(specPath) ? (JSON.parse(readFileSync(specPath, "utf8")).servers ?? []) : [];
const onProduction = servers.some((server) => /^prod/i.test(server.description ?? ""));

const blockers = [
  manifest.latest === entry.id ? null : `it is not the latest version (${manifest.latest})`,
  entry.status === "current" ? null : `its status is ${entry.status}, not current`,
  onProduction ? null : "its spec lists no Production server",
].filter(Boolean);
const release = blockers.length === 0;
const outputs = {
  release: release ? "true" : "false",
  reason: release ? "" : `No SDK release for API ${entry.id}: ${blockers.join("; ")}. SDKs only ship the latest, current, Production version.`,
  version_id: entry.id,
  revision: String(entry.revision),
  api_version: entry.apiVersion,
  spec_path: specPath,
  breaking: String(payload.breaking === true || inputs.breaking === true || inputs.breaking === "true"),
  published_by: payload.publishedBy || event.sender?.login || "",
};

for (const [key, value] of Object.entries(outputs)) {
  const line = `${key}=${String(value).replace(/\n/g, " ")}`;
  console.log(line);
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `${line}\n`);
}
