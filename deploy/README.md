# Despliegue Vanguard Kids — VPS Zarkiel

**Lee primero:** [`VPS-ZARKIEL.md`](./VPS-ZARKIEL.md) (informe del servidor, puertos ocupados, GoDaddy, Apache).

En este VPS el tráfico público va por **Apache (80/443)**, no por Nginx. PM2 solo escucha en **localhost** con un puerto interno libre.

## Valores recomendados para este proyecto

| Concepto | Valor |
|----------|--------|
| Ruta | `/home/vanguard/web-vanguardkids` |
| PM2 | `vanguardkids-web` |
| Puerto | **`3012`** (confirmar; **no usar 3010** ni **4000**) |
| Apache | `deploy/apache-vanguardkids.conf.example` → `sites-available` |

## Archivos

| Archivo | Uso |
|---------|-----|
| `VPS-ZARKIEL.md` | Guía completa paso a paso |
| `check-server.sh` | Revisión previa (PM2, puertos, Apache) |
| `deploy.local.cjs.example` | Ruta + puerto en el VPS |
| `apache-vanguardkids.conf.example` | VirtualHost Apache (principal) |
| `ecosystem.config.cjs` | PM2 |
| `build-on-server.sh` | `npm ci` + build |
| `nginx-vanguardkids.conf.example` | Solo si en el futuro Nginx sirve 80/443 (hoy no) |

## Inicio rápido (PuTTY)

```bash
cd /home/vanguard/web-vanguardkids
./deploy/check-server.sh
cp deploy/deploy.local.cjs.example deploy/deploy.local.cjs
# Editar PORT (ej. 3012) y dominio en Apache
./deploy/build-on-server.sh
pm2 start deploy/ecosystem.config.cjs
# Luego Apache + certbot — ver VPS-ZARKIEL.md
```
