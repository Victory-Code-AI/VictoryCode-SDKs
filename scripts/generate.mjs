#!/usr/bin/env node
/*
 * Regenerates the SDKs from spec/openapi.json with OpenAPI Generator.
 *
 *   node scripts/generate.mjs              # all languages
 *   node scripts/generate.mjs python java  # selected languages
 *
 * Each language directory is wiped and regenerated, then files from
 * overrides/<language>/ are copied on top (hand-written extras that must
 * survive regeneration). Root-level packaging files for registries that
 * require them at the repository root (Packagist, SwiftPM) are written last.
 *
 * Set OPENAPI_GENERATOR_JAR to use a local generator jar instead of the
 * version pinned in openapitools.json (fetched by @openapitools/openapi-generator-cli).
 */
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import process from "node:process";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SPEC = path.join(ROOT, "spec", "openapi.json");
const config = JSON.parse(readFileSync(path.join(ROOT, "sdk.config.json"), "utf8"));

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { cwd: ROOT, stdio: "inherit", ...options });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} exited with ${result.status}`);
  }
}

function generator(args) {
  const jar = process.env.OPENAPI_GENERATOR_JAR;
  if (jar) {
    run("java", ["-jar", jar, ...args]);
  } else {
    run("npx", ["--no-install", "openapi-generator-cli", ...args]);
  }
}

function generate(name, language, workDir) {
  const output = path.join(ROOT, language.output);
  rmSync(output, { recursive: true, force: true });

  const properties = {
    ...language.properties,
    [language.versionProperty]: config.version,
  };
  const configFile = path.join(workDir, `${name}.json`);
  writeFileSync(configFile, JSON.stringify(properties, null, 2));

  console.log(`\n=== ${name}: ${language.generator} -> ${language.output}/ (v${config.version})`);
  generator([
    "generate",
    "--generator-name", language.generator,
    "--input-spec", SPEC,
    "--output", output,
    "--config", configFile,
    "--git-host", "github.com",
    "--git-user-id", config.repository.owner,
    "--git-repo-id", config.repository.name,
  ]);

  const overrides = path.join(ROOT, "overrides", name);
  if (existsSync(overrides)) {
    cpSync(overrides, output, { recursive: true });
  }
}

const COMPOSER_AUTHORS = [{ name: "Victory Code", homepage: config.repository.url }];

/** The PHP generator names the package after the git repo; use the configured package name. */
function fixPhpComposer() {
  const php = config.languages.php;
  const file = path.join(ROOT, php.output, "composer.json");
  const composer = JSON.parse(readFileSync(file, "utf8"));
  composer.name = php.package;
  composer.authors = COMPOSER_AUTHORS;
  composer.license = "MIT";
  writeFileSync(file, `${JSON.stringify(composer, null, 4)}\n`);
}

/** Packagist reads composer.json from the repository root. */
function writeRootComposer() {
  const php = config.languages.php;
  const composer = JSON.parse(readFileSync(path.join(ROOT, php.output, "composer.json"), "utf8"));
  const prefix = (value) => `${php.output}/${value.replace(/^\.?\//, "")}`;
  for (const section of ["autoload", "autoload-dev"]) {
    for (const [namespace, dir] of Object.entries(composer[section]?.["psr-4"] ?? {})) {
      composer[section]["psr-4"][namespace] = prefix(dir);
    }
  }
  delete composer.version; // Packagist takes versions from git tags.
  composer.homepage = config.repository.url;
  writeFileSync(path.join(ROOT, "composer.json"), `${JSON.stringify(composer, null, 4)}\n`);
}

/** SwiftPM resolves packages from the repository root. */
function writeRootPackageSwift() {
  const ios = config.languages.ios;
  const manifest = readFileSync(path.join(ROOT, ios.output, "Package.swift"), "utf8");
  const rooted = manifest.replace(/path:\s*"([^"]+)"/g, (_, dir) => `path: "${ios.output}/${dir}"`);
  if (rooted === manifest) {
    throw new Error("Could not find target paths in the generated Package.swift");
  }
  writeFileSync(path.join(ROOT, "Package.swift"), rooted);
}

function main() {
  if (!existsSync(SPEC)) {
    throw new Error("spec/openapi.json is missing. Run: node scripts/sync-spec.mjs <portal checkout> <spec path>");
  }

  const requested = process.argv.slice(2);
  const names = requested.length ? requested : Object.keys(config.languages);
  const unknown = names.filter((name) => !config.languages[name]);
  if (unknown.length) throw new Error(`Unknown language(s): ${unknown.join(", ")}`);

  const workDir = mkdtempSync(path.join(tmpdir(), "sdk-gen-"));
  try {
    for (const name of names) generate(name, config.languages[name], workDir);
  } finally {
    rmSync(workDir, { recursive: true, force: true });
  }

  if (names.includes("php")) {
    fixPhpComposer();
    writeRootComposer();
  }
  if (names.includes("ios")) writeRootPackageSwift();
  console.log(`\nGenerated ${names.join(", ")} at version ${config.version}.`);
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
