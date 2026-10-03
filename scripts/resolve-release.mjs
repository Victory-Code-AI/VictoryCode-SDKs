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
 * SDKs always track the portal's latest version; events for other versions
 * (e.g. a beta) resolve to release=false.
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

const latest = manifest.latest === entry.id;
const outputs = {
  release: latest ? "true" : "false",
  reason: latest ? "" : `API ${entry.id} is not the latest version (${manifest.latest}); SDKs follow the latest version.`,
  version_id: entry.id,
  revision: String(entry.revision),
  api_version: entry.apiVersion,
  spec_path: path.join(portalDir, "specs", entry.id, "openapi.json"),
  breaking: String(payload.breaking === true || inputs.breaking === true || inputs.breaking === "true"),
  published_by: payload.publishedBy || event.sender?.login || "",
};

for (const [key, value] of Object.entries(outputs)) {
  const line = `${key}=${String(value).replace(/\n/g, " ")}`;
  console.log(line);
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `${line}\n`);
}
