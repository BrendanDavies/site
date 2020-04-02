const { addUtilitiesFromConfig } = require('./tailwind/helpers.js');

module.exports = {
  theme: {
    extend: {},

    // Custom Tailwind Theme Configutation
    typography: theme => ({
      header1: {
        fontSize: theme('fontSize.scale-8'),
        fontWeight: theme('fontWeight.100'),
        lineHeight: theme('lineHeight.normal'),
        letterSpacing: theme('letterSpacing.wide')
      },

      display1: {
        fontSize: theme('fontSize.scale-4'),
        fontWeight: theme('fontWeight.100'),
        lineHeight: theme('lineHeight.normal'),
        letterSpacing: theme('letterSpacing.wide')
      },

      display2: {
        fontSize: theme('fontSize.scale-2'),
        fontWeight: theme('fontWeight.500'),
        lineHeight: theme('lineHeight.normal'),
        letterSpacing: theme('letterSpacing.wide')
      },

      normal: {
        fontSize: theme('fontSize.scale-0'),
        fontWeight: theme('fontWeight.300'),
        lineHeight: theme('lineHeight.normal'),
        letterSpacing: theme('letterSpacing.wide')
      },

      normal2: {
        fontSize: theme('fontSize.scale-0'),
        fontWeight: theme('fontWeight.700'),
        lineHeight: theme('lineHeight.normal'),
        letterSpacing: theme('letterSpacing.wide')
      },

      body1: {
        fontSize: theme('fontSize.scale-n1'),
        fontWeight: theme('fontWeight.400'),
        lineHeight: theme('lineHeight.normal'),
        letterSpacing: theme('letterSpacing.wide')
      },

      body2: {
        fontSize: theme('fontSize.scale-n2'),
        fontWeight: theme('fontWeight.700'),
        lineHeight: theme('lineHeight.normal'),
        letterSpacing: theme('letterSpacing.wide')
      },

      link: {
        fontSize: theme('fontSize.scale-n1'),
        fontWeight: theme('fontWeight.700'),
        lineHeight: theme('lineHeight.normal'),
        letterSpacing: theme('letterSpacing.wide')
      },

      footer: {
        fontSize: theme('fontSize.scale-n1'),
        fontWeight: theme('fontWeight.700'),
        lineHeight: theme('lineHeight.normal'),
        letterSpacing: theme('letterSpacing.wider')
      }
    })
  },
  variants: {},
  plugins: [addUtilitiesFromConfig('typography', 'text-')]
};
