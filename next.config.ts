import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**", // This allows any path under the hostname
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
  output: "standalone",
  transpilePackages: ["motion"],
  webpack: (config, { dev }) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === "true") {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
