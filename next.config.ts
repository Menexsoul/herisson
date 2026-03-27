import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // Paramètres pour GitHub Pages
  output: "export",
  basePath: "/herisson", // <-- Le nom exact de ton dépôt

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.maganimo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-s-www.vosgesmatin.fr",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.francebleu.fr",
        port: "",
        pathname: "/pikapi/images/**",
      },
      {
        protocol: "https",
        hostname: "active-radio.fr",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "afjv.com",
        port: "",
        pathname: "/2018/02/**",
      },
    ],
  },
  transpilePackages: ["motion"],
  webpack: (config, { dev }) => {
    if (dev && process.env.DISABLE_HMR === "true") {
      config.watchOptions = { ignored: /.*/ };
    }
    return config;
  },
};

export default nextConfig;
