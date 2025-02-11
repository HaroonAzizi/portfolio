/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/",
  // Add this section for build caching
  experimental: {
    turbotrace: {
      enabled: true,
    },
  },
};

export default nextConfig;
