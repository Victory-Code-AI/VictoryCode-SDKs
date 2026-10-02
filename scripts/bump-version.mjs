#!/usr/bin/env node
/*
 * Computes and records the next SDK version (shared by all languages).
 *
 *   node scripts/bump-version.mjs --breaking true            # breaking API change
 *   node scripts/bump-version.mjs --breaking false           # additive change
 *   node scripts/bump-version.mjs --level patch              # e.g. generator upgrade
 *   node scripts/bump-version.mjs --set 1.0.0                # explicit version
 *   ... --note "Adds highlights" --api "v1 rev 3 (1.2.0)"    # changelog details
 *
 * Semantic versioning: breaking -> major, otherwise minor. While the major
 * version is 0, breaking changes bump the minor version instead.
 * Updates sdk.config.json and CHANGELOG.md, prints `version=X.Y.Z`
 * (also to $GITHUB_OUTPUT).
 */
import { appendFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { parseArgs } from "node:util";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const CONFIG = path.join(ROOT, "sdk.config.json");
const CHANGELOG = path.join(ROOT, "CHANGELOG.md");
const SEMVER = /^(\d+)\.(\d+)\.(\d+)$/;

export function nextVersion(current, { breaking = false, level = "auto", set } = {}) {
  if (set) {
    if (!SEMVER.test(set)) throw new Error(`--set must be MAJOR.MINOR.PATCH, got '${set}'`);
    return set;
  }
  const match = current.match(SEMVER);
  if (!match) throw new Error(`Current version '${current}' is not MAJOR.MINOR.PATCH`);
  let [major, minor, patch] = match.slice(1).map(Number);

  const resolved = level === "auto" ? (breaking ? "major" : "minor") : level;
  if (resolved === "major" && major === 0) {
    return `0.${minor + 1}.0`;
  }
  if (resolved === "major") return `${major + 1}.0.0`;
  if (resolved === "minor") return `${major}.${minor + 1}.0`;
  if (resolved === "patch") return `${major}.${minor}.${patch + 1}`;
  throw new Error(`Unknown level '${level}'`);
}

function main() {
  const { values } = parseArgs({
    options: {
      breaking: { type: "string", default: "false" },
      level: { type: "string", default: "auto" },
      set: { type: "string" },
      note: { type: "string" },
      api: { type: "string" },
    },
  });

  const config = JSON.parse(readFileSync(CONFIG, "utf8"));
  const breaking = values.breaking === "true";
  const version = nextVersion(config.version, { breaking, level: values.level, set: values.set || undefined });
  if (version === config.version) throw new Error(`Version ${version} is unchanged.`);

  config.version = version;
  writeFileSync(CONFIG, `${JSON.stringify(config, null, 2)}\n`);

  const date = new Date().toISOString().slice(0, 10);
  const lines = [
    `## ${version} (${date})`,
    "",
    ...(values.api ? [`Generated from API ${values.api}.`, ""] : []),
    ...(breaking ? ["**Contains breaking API changes.** Review the API changelog before upgrading.", ""] : []),
    ...(values.note ? [values.note, ""] : []),
  ];
  const existing = existsSync(CHANGELOG) ? readFileSync(CHANGELOG, "utf8").replace(/^# Changelog\n+/, "") : "";
  writeFileSync(CHANGELOG, `# Changelog\n\n${lines.join("\n")}\n${existing}`);

  console.log(`version=${version}`);
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `version=${version}\n`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
