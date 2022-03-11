const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  async redirects() {
    return [
      {
        source: '/react/React%20hook%EC%9D%98%20lifecycle%2C%20useEffect%EB%A5%BC%20%EC%A4%91%EC%8B%AC%EC%9C%BC%EB%A1%9C',
        destination: '/articles/react/react-hook-lifecycle',
        permanent: true,
      },
      {
        source: '/javascript/:path*',
        destination: '/articles/javascript/:path*',
        permanent: true,
      },
    ];
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: { workerThreads: true },
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  poweredByHeader: process.env.NODE_ENV === 'development',
  reactStrictMode: process.env.NODE_ENV === 'development',
});
