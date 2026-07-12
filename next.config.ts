import type { NextConfig } from "next";

import { redirects } from "./src/lib/site";

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(redirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
