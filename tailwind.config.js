module.exports = {
  purge: ['./components/**/*.*', './pages/**/*.*'],
  theme: {
    extend: {
      colors: {
        burnt: '#ab4f01',
        orange: '#f39933',
        eggplant: '#5b2337'
        // c4: '#a67871',
        // c5: '#2e161'
      }
    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)'
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)'
    }
  },
  variants: {
    filter: ['responsive'],
    backdropFilter: ['responsive']
  },
  plugins: [require('tailwindcss-filters')]
};
