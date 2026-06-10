#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BIN_DIR="$ROOT/.bin"
HUGO_VERSION="0.139.4"
HUGO_BIN="$BIN_DIR/hugo"

if [[ "$(uname -m)" == "arm64" ]]; then
  HUGO_ARCHIVE="hugo_extended_${HUGO_VERSION}_darwin-universal.tar.gz"
else
  HUGO_ARCHIVE="hugo_extended_${HUGO_VERSION}_darwin-amd64.tar.gz"
fi

if [[ ! -x "$HUGO_BIN" ]]; then
  echo "Downloading Hugo ${HUGO_VERSION}..."
  mkdir -p "$BIN_DIR"
  tmp="$(mktemp -d)"
  curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_ARCHIVE}" \
    -o "$tmp/hugo.tar.gz"
  tar -xzf "$tmp/hugo.tar.gz" -C "$tmp" hugo
  mv "$tmp/hugo" "$HUGO_BIN"
  chmod +x "$HUGO_BIN"
  rm -rf "$tmp"
  echo "Installed Hugo to $HUGO_BIN"
fi

cd "$ROOT"
exec "$HUGO_BIN" --minify "$@"
