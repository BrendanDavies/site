const RAW_COLORS = {
  'windsor-tan': '#ad5101',
  wine: '#592630',
  'deep-space-sparkle': '#4c5b5d',
  'honey-yellow': '#ffb005',
  champagne: '#eedfc9'
};

module.exports = {
  primary: RAW_COLORS['windsor-tan'],
  secondary: RAW_COLORS['honey-yellow'],
  cover: RAW_COLORS['deep-space-sparkle'],
  ...RAW_COLORS // Stop doing this
};
