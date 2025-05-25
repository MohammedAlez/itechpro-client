import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol: 'http',   
        hostname: 'localhost',
        port: '1337',
        // pathname: '*',
        // search: '',
      },
      {
        protocol: 'https',   
        hostname: 'api.tajinformatique.com',
        // port: '1337',
        // pathname: '*',
        // search: '',
      },
    ],
  },
  "eslint":{
    "ignoreDuringBuilds":true
  }
};

export default nextConfig;
