/**
 * PM2 — Vanguard Kids (producción en VPS)
 *
 * Antes de editar:
 *   1. Cambia DEPLOY_PATH y PORT (debe coincidir con nginx).
 *   2. Crea .env.production en el servidor (ver config.example.env).
 *   3. Ejecuta deploy/build-on-server.sh o el flujo del README.
 */
const DEPLOY_PATH = "/var/www/vanguardkids";
const PORT = 3010;

module.exports = {
  apps: [
    {
      name: "vanguardkids-web",
      cwd: DEPLOY_PATH,
      script: "node_modules/next/dist/bin/next",
      args: `start -p ${PORT}`,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "600M",
      time: true,
      env: {
        NODE_ENV: "production",
        PORT: String(PORT),
      },
      // Opcional: ruta absoluta al .env de producción (PM2 5+)
      // env_file: `${DEPLOY_PATH}/.env.production`,
    },
  ],
};
