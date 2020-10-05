const RAW_COLORS = {
  burnt: '#ab4f01',
  orange: '#f39933',
  eggplant: '#5b2337'
  // c4: '#a67871',
  // c5: '#2e161'
};

module.exports = {
  primary: RAW_COLORS.burnt,
  secondary: RAW_COLORS.eggplant,
  ...RAW_COLORS // Stop doing this
};
