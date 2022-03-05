const { redirect } = require('next/dist/server/api-utils');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  async redirects() {
    return [
      {
        source: '/react/:path*',
        destination: '/articles/react/:path*',
        permanent: true,
      },
      {
        source: '/essay/:path*',
        destination: '/articles/essay/:path*',
        permanent: true,
      },
      {
        source: '/story/:path*',
        destination: '/articles/story/:path*',
        permanent: true,
      },
      {
        source: '/web/:path*',
        destination: '/articles/web/:path*',
        permanent: true,
      },
      {
        source: '/webpack/:path*',
        destination: '/articles/webpack/:path*',
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
});
