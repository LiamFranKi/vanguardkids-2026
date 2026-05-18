# Despliegue en VPS (Zarkiel / PM2 + Nginx)

Preparado para cuando salgáis de local. **No hace falta Vercel.**

## Resumen del flujo

```
Internet → Nginx (80/443) → proxy → Next.js (PM2, puerto 3010)
```

## Archivos de esta carpeta

| Archivo | Para qué sirve |
|---------|----------------|
| `config.example.env` | Plantilla de variables en el servidor |
| `ecosystem.config.cjs` | Configuración PM2 (proceso + puerto) |
| `nginx-vanguardkids.conf.example` | Virtual host Nginx |
| `build-on-server.sh` | Build de producción en el VPS |

## Checklist antes del primer deploy

1. **Node.js 18+** en el VPS (`node -v`).
2. **Puerto libre** (por defecto `3010`; distinto de vuestras otras apps).
3. **Ruta en disco** (por defecto `/var/www/vanguardkids`).
4. **DNS** de `vanguardkids.com` apuntando al VPS.
5. Editar `DEPLOY_PATH` y `PORT` en `ecosystem.config.cjs` si cambiáis rutas.

## Primera instalación en el VPS

```bash
# 1. Subir código (git clone, rsync, etc.)
sudo mkdir -p /var/www/vanguardkids
sudo chown $USER:$USER /var/www/vanguardkids
cd /var/www/vanguardkids
# git pull ...

# 2. Variables de entorno (OBLIGATORIO antes del build)
cp deploy/config.example.env .env.production
nano .env.production   # WhatsApp, mapas, etc.

# 3. Build
chmod +x deploy/build-on-server.sh
./deploy/build-on-server.sh

# 4. PM2
pm2 start deploy/ecosystem.config.cjs
pm2 save
pm2 startup   # si aún no está configurado en el servidor

# 5. Nginx
sudo cp deploy/nginx-vanguardkids.conf.example /etc/nginx/sites-available/vanguardkids
sudo ln -sf /etc/nginx/sites-available/vanguardkids /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 6. HTTPS (recomendado)
sudo certbot --nginx -d vanguardkids.com -d www.vanguardkids.com
```

## Actualizar la web (cambios de diseño / código)

```bash
cd /var/www/vanguardkids
git pull   # o subir archivos nuevos
./deploy/build-on-server.sh
pm2 reload vanguardkids-web
```

## Variables `NEXT_PUBLIC_*`

Next.js **incrusta** `NEXT_PUBLIC_` en el build. Si cambiáis WhatsApp o mapas:

1. Editáis `.env.production`
2. Volvéis a ejecutar `./deploy/build-on-server.sh`
3. `pm2 reload vanguardkids-web`

## Comandos útiles

```bash
pm2 logs vanguardkids-web
pm2 status
pm2 monit
curl -I http://127.0.0.1:3010
```

## Local vs producción

| | Local | VPS |
|---|--------|-----|
| Comando | `npm run dev` | `npm run build` + PM2 + Nginx |
| Botón "N" de Next | Sí (solo dev) | No aparece |
| APIs `/api/contact`, `/api/lead` | Sí | Sí (revisar logs PM2) |

## Notas

- Los formularios hoy escriben en consola del servidor; luego podéis conectar CRM, email o base de datos.
- Si otra app ya usa el puerto `3010`, cambiad `PORT` en `ecosystem.config.cjs` y `upstream` en Nginx.
