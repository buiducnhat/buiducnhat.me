/** @type {import('next').NextConfig} */

const { i18n } = require('./src/configs/i18n/i18n.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
