import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/shankar-portfolio",
  assetPrefix: "/shankar-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
