/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};
const withPWA = require('next-pwa')({
  dest: 'public'
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  nextConfig,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});
