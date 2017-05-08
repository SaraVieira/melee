#!/bin/bash

# Unofficial Bash Strict Mode
set -euo pipefail
IFS=$'\n\t'

export SERVICE_GROUP="frontend"
export SERVICE_NAME="funds"
export HEALTHCHECK_PATH="/funds/v1/health"
