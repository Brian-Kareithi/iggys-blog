import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ppkfgsakvcijmmhjwbcz.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
