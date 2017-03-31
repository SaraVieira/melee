#!/bin/bash

# Unofficial Bash Strict Mode
set -euo pipefail
IFS=$'\n\t'

# Clean possible previous assets
rm -rf node_modules
rm -rf build
rm -rf repors

# Build new target
npm install
npm test
npm run build:prod
npm prune --production
