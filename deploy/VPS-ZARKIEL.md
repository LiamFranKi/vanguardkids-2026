# Vanguard Kids en VPS Zarkiel (89.117.52.9)

Guía alineada con el informe del servidor: **Apache en 80/443**, PM2, varios dominios activos.

| Dato | Valor |
|------|--------|
| IP | `89.117.52.9` |
| Usuario SSH | `vanguard` |
| Carpeta proyecto | `/home/vanguard/web-vanguardkids` |
| Repositorio | `https://github.com/LiamFranKi/vanguardkids-2026` |
| PM2 (nombre único) | `vanguardkids-web` |
| Puerto Node (propuesto) | **`3012`** — confirmar con `check-server.sh` |
| Proxy | **Apache** VirtualHost nuevo (no Nginx público) |

## Sistemas que NO debes tocar

| Sistema | Carpeta / PM2 | Puerto | Nota |
|---------|---------------|--------|------|
| Vanguard Schools (web anterior) | `/home/vanguard/web-vanguard` · `vanguard-web-test` | **3010** | Mismo stack Next.js, **no reutilizar 3010** |
| YaProfe | `/home/vanguard/yaprofe/dist` | **4000** (API) | Estático + proxy `/api` |
| Intranet 2026 | `intranet2026-backend` | (varios) | Apache + PM2 |
| Otros | api, sistema, tour… | (varios) | VirtualHosts Apache aparte |

**Nginx** puede estar instalado pero **no** sirve el tráfico público 80/443 en este VPS; eso lo hace **Apache**.

---

## Reglas de oro

**NO:**

- `systemctl stop apache2` / `disable apache2`
- `pm2 restart all` / `pm2 delete all`
- Editar `.conf` de intranet, yaprofe, vanguardschools, sistema, etc.
- Usar puerto **3010** ni **4000**

**SÍ:**

- Solo `pm2 start` / `pm2 reload **vanguardkids-web**`
- Archivo Apache **nuevo**: `/etc/apache2/sites-available/vanguardkids.com.conf` (o tu dominio GoDaddy)
- `sudo apache2ctl configtest` → luego `sudo systemctl reload apache2`
- Puerto nuevo (ej. **3012**) verificado con `curl http://127.0.0.1:3012`

---

## Paso 0 — Revisión en PuTTY

```bash
cd /home/vanguard/web-vanguardkids
git pull origin main
chmod +x deploy/check-server.sh
./deploy/check-server.sh
sudo ss -tulpn | grep LISTEN
pm2 list
```

Si **3012** aparece ocupado, prueba **3011**, **3020** o **4001** y actualiza `deploy/deploy.local.cjs` + `.env.production` + Apache.

---

## Paso 1 — DNS GoDaddy (tu dominio nuevo)

| Tipo | Host | Valor |
|------|------|--------|
| A | @ | 89.117.52.9 |
| A | www | 89.117.52.9 |

No borres MX/TXT de correo. Verifica: `nslookup tudominio.com` → `89.117.52.9`

Sustituye `vanguardkids.com` por tu dominio real en Apache y certbot.

---

## Paso 2 — Código

```bash
mkdir -p /home/vanguard/web-vanguardkids
cd /home/vanguard/web-vanguardkids
git clone https://github.com/LiamFranKi/vanguardkids-2026.git .
```

Configuración local:

```bash
cp deploy/deploy.local.cjs.example deploy/deploy.local.cjs
nano deploy/deploy.local.cjs          # PORT=3012 (o el libre que viste)
cp deploy/config.example.env .env.production
nano .env.production                  # mismo PORT=3012
chmod +x deploy/build-on-server.sh
./deploy/build-on-server.sh
```

---

## Paso 3 — PM2 (solo Vanguard Kids)

```bash
cd /home/vanguard/web-vanguardkids
pm2 start deploy/ecosystem.config.cjs
pm2 save
curl -I http://127.0.0.1:3012
```

Debe responder **200** antes de configurar Apache.

**Actualizar después:**

```bash
cd /home/vanguard/web-vanguardkids
git pull origin main
./deploy/build-on-server.sh
pm2 reload vanguardkids-web
```

---

## Paso 4 — Apache VirtualHost (obligatorio)

```bash
sudo cp deploy/apache-vanguardkids.conf.example /etc/apache2/sites-available/vanguardkids.com.conf
sudo nano /etc/apache2/sites-available/vanguardkids.com.conf
```

- Cambia `ServerName` / `ServerAlias` por tu dominio GoDaddy.
- Cambia `127.0.0.1:3026` → tu puerto (ej. `3012`).

```bash
sudo a2enmod proxy proxy_http headers
sudo a2ensite vanguardkids.com.conf
sudo apache2ctl configtest
sudo systemctl reload apache2
curl -I http://tudominio.com
```

Comprueba que siguen vivos los otros:

```bash
curl -I https://intranet.vanguardschools.edu.pe
curl -I https://yaprofe.com
```

---

## Paso 5 — HTTPS

Cuando el DNS apunte a la IP:

```bash
sudo certbot --apache -d tudominio.com -d www.tudominio.com
```

En `.env.production` (opcional):

```env
SITE_URL=https://www.tudominio.com
```

Vuelve a build + reload:

```bash
./deploy/build-on-server.sh
pm2 reload vanguardkids-web
```

---

## Checklist final

- [ ] DNS @ y www → 89.117.52.9
- [ ] Código en `/home/vanguard/web-vanguardkids`
- [ ] Puerto **≠ 3010** y **≠ 4000**
- [ ] `pm2 list` muestra `vanguardkids-web` online
- [ ] `curl http://127.0.0.1:PUERTO` → 200
- [ ] VirtualHost Apache **nuevo** habilitado
- [ ] `apache2ctl configtest` → Syntax OK
- [ ] `systemctl reload apache2` (no stop)
- [ ] Certbot HTTPS
- [ ] Intranet, YaProfe y web-vanguard (3010) siguen OK
- [ ] Dominio nuevo en ventana incógnito

---

## Diagnóstico rápido

```bash
pm2 list
pm2 logs vanguardkids-web --lines 30
sudo ss -tulpn | grep -E ':3010|:3012|:4000|:80|:443'
sudo apache2ctl -S
curl -I http://127.0.0.1:3012
```

---

## No usar en este VPS

- `deploy/nginx-vanguardkids.conf.example` para tráfico público (Apache ya usa 80/443).
- Puerto **3010** (ocupado por `vanguard-web-test` en `/home/vanguard/web-vanguard`).
