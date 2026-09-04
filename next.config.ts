import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Recomendado pelo Next.js para permitir testes via celular na LAN
  allowedDevOrigins: ['192.168.100.29', '192.168.1.100', '192.168.0.100', '192.168.1.16', 'localhost'],
  compress: true,
  images: {
    qualities: [25, 50, 60, 70, 75, 80, 82, 84, 86, 88, 90, 100],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Cache imagens estáticas por 1 ano
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache fontes por 1 ano
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
