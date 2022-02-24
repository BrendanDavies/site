const COLORS = require('./tokens/colors');

module.exports = {
  future: {
    // Soon to be deprecated features
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  content: ['./components/**/*.*', './pages/**/*.*'],
  theme: {
    extend: {
      colors: COLORS
    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)'
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(4px)'
    }
  },
  plugins: [require('tailwindcss-filters')]
};
