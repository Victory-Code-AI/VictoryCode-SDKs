#!/usr/bin/env node
/*
 * Copies a published spec from a developer-portal checkout into spec/ and records
 * where it came from.
 *
 *   node scripts/sync-spec.mjs <path/to/openapi.json> \
 *     --portal-repo victory-code-ai/developers-portal --portal-sha <sha> \
 *     --version v1 --revision 3 --api-version 1.2.0
 *
 * Prints `changed=true|false` (also to $GITHUB_OUTPUT): whether the API surface
 * the SDKs are generated from differs from what is committed.
 */
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { parseArgs } from "node:util";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SPEC = path.join(ROOT, "spec", "openapi.json");
const SOURCE = path.join(ROOT, "spec", "source.json");

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    "portal-repo": { type: "string" },
    "portal-sha": { type: "string" },
    version: { type: "string" },
    revision: { type: "string" },
    "api-version": { type: "string" },
  },
});

const input = positionals[0];
if (!input || !existsSync(input)) {
  console.error(`Spec file not found: ${input ?? "(none)"}`);
  process.exit(1);
}

const next = JSON.parse(readFileSync(input, "utf8"));
if (typeof next.openapi !== "string" || !next.paths) {
  console.error(`${input} is not an OpenAPI document.`);
  process.exit(1);
}

// Portal-only extensions do not affect generated code; ignore them when comparing.
function surface(document) {
  const copy = structuredClone(document);
  for (const key of Object.keys(copy)) if (key.startsWith("x-")) delete copy[key];
  return JSON.stringify(copy);
}

const previous = existsSync(SPEC) ? JSON.parse(readFileSync(SPEC, "utf8")) : null;
const changed = !previous || surface(previous) !== surface(next);

mkdirSync(path.dirname(SPEC), { recursive: true });
writeFileSync(SPEC, `${JSON.stringify(next, null, 2)}\n`);
writeFileSync(
  SOURCE,
  `${JSON.stringify(
    {
      portalRepo: values["portal-repo"] ?? null,
      portalSha: values["portal-sha"] ?? null,
      version: values.version ?? null,
      revision: values.revision ? Number(values.revision) : null,
      apiVersion: values["api-version"] ?? next.info?.version ?? null,
      syncedAt: new Date().toISOString(),
    },
    null,
    2,
  )}\n`,
);

console.log(`changed=${changed}`);
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
