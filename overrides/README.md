# Overrides

Files placed in `overrides/<language>/` are copied over the generated output of that
language after every regeneration (see `scripts/generate.mjs`). Use this for
hand-written additions that must survive regeneration, such as helper classes or
extra documentation. Language folder names match the keys in `sdk.config.json`
(`python`, `javascript`, `java`, `php`, `ios`, `android`).

Prefer changing the API spec or the generator options in `sdk.config.json` over
overriding generated files.
