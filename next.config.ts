import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    /* config options here */
    eslint:{
      ignoreDuringBuilds:false,
    },
    typescript:{
      ignoreBuildErrors:true
    }
    ,  experimental: {
      serverActions: {}// Enables server actions
    },
};

export default nextConfig;
