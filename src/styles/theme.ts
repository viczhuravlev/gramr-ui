export const themeColors = {
  white: '#FFFFFF',
  black: '#000000',

  gray: '#A8AAB6',
  grayLight: '#d9d9d9',

  dark: '#242C3B',
  darkLight: '#374050'
};

/**
 * Common colors for project
 */
export const colors = {
  red: '#D93732',
  blue: '#1890ff',
  green: '#5CAC54',
  orange: '#F7981C',
  purple: '#C86DD7'
};

console.log(colors);

/**
 * Light theme
 */
const light = {
  ...colors,

  font: themeColors.darkLight,
  fontHover: colors.blue,
  fontDisabled: themeColors.gray,
  fontSecondary: themeColors.gray,

  border: themeColors.grayLight,
  borderHover: colors.blue,
  borderDisabled: themeColors.grayLight,

  background: themeColors.white,
  backgroundDisabled: themeColors.white
};

/**
 * Dark theme
 */
const dark = {
  ...colors,

  font: themeColors.white,
  fontHover: colors.blue,
  fontSecondary: themeColors.gray,
  fontDisabled: themeColors.darkLight,

  border: themeColors.darkLight,
  borderHover: themeColors.darkLight,
  borderDisabled: themeColors.darkLight,

  background: themeColors.dark,
  backgroundDisabled: themeColors.dark
};

export const theme = { light, dark };
