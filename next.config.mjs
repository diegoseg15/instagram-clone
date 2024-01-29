/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "cdn.icon-icons.com",
        port: "",
        pathname: "/icons2/**",
      },
      {
        protocol: "https",
        hostname: "scontent-ams4-1.cdninstagram.com",
        port: "",
        pathname: "/v/t51.2885-19/**",
      },
    ],
  },
};

export default nextConfig;
