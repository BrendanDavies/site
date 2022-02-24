const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');

const nextConfig = {
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      }
    ],
    swDest: 'static/service-worker.js'
  }
};

// next.config.js
module.exports = withPlugins([withOffline, optimizedImages], nextConfig);
