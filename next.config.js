/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "motion/react",
      "nextjs-toploader",
      "nextjs-toploader/app",
      "next-cloudinary",
    ],
    staleTimes: {
      // 1 month
      static: 2628000,
    },
  },
};

export default config;
