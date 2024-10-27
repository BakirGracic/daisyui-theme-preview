import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/daisyui-theme-preview",
    images: { unoptimized: true },
};

export default nextConfig;
