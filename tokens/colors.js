const RAW_COLORS = {
  'windsor-tan': '#ad5101',
  wine: '#592630',
  'deep-space-sparkle': '#4c5b5d',
  'honey-yellow': '#ffb005',
  champagne: '#eedfc9'
};

// Palette based on background
// /* CSS HEX */
// --pine-tree: #2b2c25ff;
// --cadet: #556f7aff;
// --gray-web: #798086ff;
// --lilac-luster: #b79fadff;
// --pink-lavender: #d4afcdff;

module.exports = {
  primary: RAW_COLORS['windsor-tan'],
  secondary: RAW_COLORS['honey-yellow'],
  cover: RAW_COLORS['deep-space-sparkle'],
  ...RAW_COLORS // Stop doing this
};
