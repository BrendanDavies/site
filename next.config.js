const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

// next.config.js
module.exports = withCSS(withImages({}));
