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

if [[ -f deploy/deploy.local.cjs ]]; then
  echo "→ Config deploy: $(node -p "const c=require('./deploy/deploy.local.cjs'); \`PORT=\${c.PORT} path=\${c.DEPLOY_PATH}\`")"
else
  echo "⚠️  Crea deploy/deploy.local.cjs (copia deploy.local.cjs.example) y define un PORT libre."
  echo "    Ejecuta antes: ./deploy/check-server.sh"
fi

echo "✓ Build listo. Arranca o recarga SOLO esta app:"
echo "  pm2 start deploy/ecosystem.config.cjs   # primera vez"
echo "  pm2 reload vanguardkids-web             # actualizaciones (no pm2 restart all)"
