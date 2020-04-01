const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withOffline = require('next-offline');

// next.config.js
module.exports = withOffline(withCSS(withImages({})));
