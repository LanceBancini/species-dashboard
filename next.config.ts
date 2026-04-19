import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false // deaktiviert lightningcss
  }
};

export default nextConfig;
