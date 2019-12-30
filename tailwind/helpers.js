/*
  A function that returns a Tailwind plugin that will add
  CSS based on Tailwind config keys.
*/
const addUtilitiesFromConfig = (name, classPrefix = `${name}-`) => ({
  addUtilities,
  config,
  e
}) => {
  const settings = config(`theme.${name}`, {});

  Object.keys(settings).forEach(setting => {
    const className = e(`${classPrefix}${setting}`);

    addUtilities(
      {
        [`.${className}`]: settings[setting]
      },
      config(`variants.${name}`, {})
    );
  });
};

module.exports.addUtilitiesFromConfig = addUtilitiesFromConfig;
