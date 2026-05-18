#!/usr/bin/env bash
# Revisión previa VPS Zarkiel — solo lectura, no modifica servicios.
# Uso: chmod +x deploy/check-server.sh && ./deploy/check-server.sh

set -euo pipefail

echo "════════════════════════════════════════════════════════"
echo "  Vanguard Kids — VPS Zarkiel (89.117.52.9)"
echo "  Apache = 80/443 público · PM2 = puerto interno"
echo "════════════════════════════════════════════════════════"
echo ""

echo "▶ PM2 (no tocar: vanguard-web-test, intranet2026-backend, etc.)"
if command -v pm2 >/dev/null 2>&1; then
  pm2 list || true
else
  echo "  (pm2 no encontrado)"
fi
echo ""

echo "▶ Puertos conocidos en este servidor"
echo "  OCUPADO (no usar): 3010 → web-vanguard / vanguard-web-test"
echo "  OCUPADO (no usar): 4000 → YaProfe API"
echo "  Candidatos si libres: 3011, 3012, 3020, 4001"
echo ""

if command -v ss >/dev/null 2>&1; then
  echo "▶ Escucha (primeras líneas):"
  sudo ss -tulpn 2>/dev/null | grep LISTEN | head -n 35 || ss -tln | head -n 35
else
  echo "  (ss no disponible)"
fi
echo ""

echo "▶ Comprobación de candidatos"
for p in 3010 3011 3012 3020 4000 4001; do
  if ss -tln 2>/dev/null | grep -q ":${p} "; then
    echo "  ⚠️  OCUPADO: $p"
  else
    echo "  ✓  libre (aparente): $p"
  fi
done
echo ""

echo "▶ Apache (principal en este VPS)"
if command -v apache2ctl >/dev/null 2>&1; then
  echo "  Estado: $(systemctl is-active apache2 2>/dev/null || echo '?')"
  echo "  VirtualHosts:"
  sudo apache2ctl -S 2>/dev/null | head -n 30 || apache2ctl -S 2>/dev/null | head -n 30 || true
else
  echo "  (apache2ctl no encontrado)"
fi
echo ""

echo "▶ Nginx (informativo — no debe tomar 80/443 aquí)"
if command -v nginx >/dev/null 2>&1; then
  systemctl is-active nginx 2>/dev/null || true
else
  echo "  (nginx no instalado o inactivo)"
fi
echo ""

echo "▶ deploy.local.cjs de este proyecto"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
if [[ -f "$ROOT/deploy/deploy.local.cjs" ]]; then
  node -e "const c=require('$ROOT/deploy/deploy.local.cjs'); console.log('  DEPLOY_PATH:', c.DEPLOY_PATH); console.log('  PORT:', c.PORT);"
else
  echo "  (falta — copia deploy.local.cjs.example; sugerido PORT=3012)"
fi
echo ""
echo "Siguiente: edita deploy.local.cjs, build, pm2 start, Apache — ver deploy/VPS-ZARKIEL.md"
echo "Listo. No se ha cambiado ningún servicio."
