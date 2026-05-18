/**
 * PM2 — Vanguard Kids (VPS Zarkiel)
 *
 * Puerto por defecto 3012 (3010 = vanguard-web-test, 4000 = YaProfe).
 * Copia deploy/deploy.local.cjs.example → deploy/deploy.local.cjs
 *
 * Solo: pm2 reload vanguardkids-web  (nunca pm2 restart all)
 */
const path = require("path");
const fs = require("fs");

const defaults = {
  DEPLOY_PATH: "/home/vanguard/web-vanguardkids",
  PORT: 3012,
};

function loadLocal() {
  const localPath = path.join(__dirname, "deploy.local.cjs");
  if (!fs.existsSync(localPath)) return {};
  return require(localPath);
}

const local = loadLocal();
const DEPLOY_PATH = local.DEPLOY_PATH ?? defaults.DEPLOY_PATH;
const PORT = Number(local.PORT ?? defaults.PORT);

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
    },
  ],
};
