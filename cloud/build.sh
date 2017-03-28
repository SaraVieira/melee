#!/bin/bash
set -e # ensure that this script will return a non-0 status code if any of rhe commands fail
set -o pipefail # ensure that this script will return a non-0 status code if any of rhe commands fail

#### BUILD
rm -rf node_modules
rm -rf build
npm install
npm test
npm run compile:prod
npm prune --production
