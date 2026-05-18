import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Evita que Next use /home/vanguard/package-lock.json como raíz del monorepo */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
