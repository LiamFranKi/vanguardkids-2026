#!/usr/bin/env bash
# Ejecutar EN EL VPS dentro de la carpeta del proyecto.
# Uso:  chmod +x deploy/build-on-server.sh && ./deploy/build-on-server.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

ENV_FILE="${ENV_FILE:-.env.production}"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "❌ Falta $ENV_FILE — copia deploy/config.example.env y edítalo."
  exit 1
fi

echo "→ Cargando variables desde $ENV_FILE"
set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

echo "→ npm ci"
npm ci

echo "→ npm run build (con NEXT_PUBLIC_* del .env)"
npm run build

echo "✓ Build listo. Arranca o recarga PM2:"
echo "  pm2 start deploy/ecosystem.config.cjs   # primera vez"
echo "  pm2 reload vanguardkids-web             # actualizaciones"
