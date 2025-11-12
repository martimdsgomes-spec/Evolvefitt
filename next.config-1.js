/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações para resolver problemas de fetch e RSC
  experimental: {
    // Desabilitar algumas features experimentais que podem causar problemas
    serverComponentsExternalPackages: [],
  },
  
  // Configurações de rede para evitar erros de fetch
  async rewrites() {
    return [];
  },
  
  // Configurações de headers para evitar problemas de CORS
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },

  // Configurações para otimizar o build
  swcMinify: true,
  
  // Configurações de imagens
  images: {
    domains: [],
    unoptimized: false,
  },

  // Configurações para evitar problemas de hydration
  reactStrictMode: true,
  
  // Configurações de output
  output: 'standalone',
  
  // Configurações para webpack
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configurações específicas para o cliente
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;