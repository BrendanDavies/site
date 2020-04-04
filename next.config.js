const withImages = require('next-images');
const withOffline = require('next-offline');

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // // turn on the SW in dev mode so that we can actually test it
  // generateInDevMode: true,
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: 'CacheFirst'
      }
    ],
    swDest: 'static/service-worker.js'
  }
};

// next.config.js
module.exports = withOffline(withImages(nextConfig));
