#!/usr/bin/env bash
# Ejecutar EN EL VPS dentro de la carpeta del proyecto.
# Uso:  chmod +x deploy/build-on-server.sh && ./deploy/build-on-server.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

ENV_FILE="${ENV_FILE:-.env.production}"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "❌ Falta $ENV_FILE — copia deploy/config.example.env:"
  echo "   cp deploy/config.example.env .env.production"
  exit 1
fi

echo "→ Cargando NEXT_PUBLIC_* y PORT desde $ENV_FILE"
set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

# NODE_ENV=production en .env hace que `npm ci` omita devDependencies
# (Tailwind, TypeScript…) y el build falla. PM2 pone NODE_ENV en runtime.
unset NODE_ENV

echo "→ npm ci (incluye devDependencies para el build)"
npm ci --include=dev

echo "→ npm run build (Next.js lee .env.production automáticamente)"
npm run build

if [[ -f deploy/deploy.local.cjs ]]; then
  echo "→ Config deploy: $(node -p "const c=require('./deploy/deploy.local.cjs'); \`PORT=\${c.PORT} path=\${c.DEPLOY_PATH}\`")"
else
  echo "⚠️  Crea deploy/deploy.local.cjs (copia deploy.local.cjs.example)"
fi

echo "✓ Build listo. Arranca o recarga SOLO esta app:"
echo "  pm2 start deploy/ecosystem.config.cjs   # primera vez"
echo "  pm2 reload vanguardkids-web             # actualizaciones"
