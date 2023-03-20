const jssConfig = require('./src/temp/config');
const packageConfig = require('./package.json').config;
const { getPublicUrl } = require('@sitecore-jss/sitecore-jss-nextjs');
const plugins = require('./src/temp/next-config-plugins') || {};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const publicUrl = getPublicUrl();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Set assetPrefix to our public URL
  assetPrefix: publicUrl,

  // Allow specifying a distinct distDir when concurrently running app in a container
  distDir: process.env.NEXTJS_DIST_DIR || '.next',

  // Make the same PUBLIC_URL available as an environment variable on the client bundle
  env: {
    PUBLIC_URL: publicUrl,
  },

  i18n: {
    // These are all the locales you want to support in your application.
    // These should generally match (or at least be a subset of) those in Sitecore.
    locales: ['en'],
    // This is the locale that will be used when visiting a non-locale
    // prefixed path e.g. `/styleguide`.
    defaultLocale: packageConfig.language,
  },
  
  // Enable React Strict Mode
  reactStrictMode: true,

  async rewrites() {
    // When in connected mode we want to proxy Sitecore paths off to Sitecore
    return [
      // API endpoints
      {
        source: '/sitecore/api/:path*',
        destination: `${jssConfig.sitecoreApiHost}/sitecore/api/:path*`,
      },
      // media items
      {
        source: '/-/:path*',
        destination: `${jssConfig.sitecoreApiHost}/-/:path*`,
      },
      // visitor identification
      {
        source: '/layouts/system/:path*',
        destination: `${jssConfig.sitecoreApiHost}/layouts/system/:path*`,
      },
    ];
  },
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  crossOrigin: 'anonymous',
  cors: {
      credentials: true,
      origin: publicUrl,
    }
}

module.exports = withBundleAnalyzer({})

module.exports = {
  async headers() {
    return [
      {
        // matching all routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://devnew.mahindraelectricautomobile.com" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  reactStrictMode: true,
}

module.exports = () => {
  // Run the base config through any configured plugins
  return Object.values(plugins).reduce((acc, plugin) => plugin(acc), nextConfig);
}