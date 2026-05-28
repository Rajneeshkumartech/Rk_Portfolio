/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   allowedDevOrigins: ['192.168.29.47'],
   images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
