// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["lecture-1.vercel.app"],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lecture-1.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "search.pstatic.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
