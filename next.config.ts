import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
import { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: NextConfig, { isServer }:{isServer:boolean}) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
  reactStrictMode: false,
  experimental: {
    outputFileTracingIgnores: ["./prisma/client/**/*"],
  },
};

export default nextConfig;
