#!/usr/bin/env bash

# Unofficial Bash Strict Mode
set -euo pipefail
IFS=$'\n\t'

SERVICE_GROUP="frontend"
SERVICE_NAME="funds"
HEALTHCHECK_PATH="/funds/v1/health"
