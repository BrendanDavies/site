const RAW_COLORS = {
  black: '#1A1A1D',
  grey: '#4E4E50',
  wine: '#6F2232',
  purple: '#950740',
  red: '#C3073F',
  white: '#FFFFFF'
};

module.exports = {
  primary: RAW_COLORS.wine,
  secondary: RAW_COLORS.black,
  tertiary: RAW_COLORS.grey,
  ['on-primary']: RAW_COLORS.white,
  ['on-secondary']: RAW_COLORS.white,
  ['on-tertiary']: RAW_COLORS.red
  // ...RAW_COLORS // Stop doing this
};
