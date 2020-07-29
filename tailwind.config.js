module.exports = {
  purge: ['./components/**/*.*', './pages/**/*.*'],
  theme: {
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
