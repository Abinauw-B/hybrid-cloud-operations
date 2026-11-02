#!/usr/bin/env bash
set -euo pipefail

URL="${1:-http://localhost:3100}"

echo "Checking application health: $URL/health"
curl --fail --silent --show-error "$URL/health"
echo

echo "Checking Prometheus metrics: $URL/metrics"
curl --fail --silent --show-error "$URL/metrics"
echo
echo "Health check completed successfully."
