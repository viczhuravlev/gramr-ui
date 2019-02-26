export enum Colors {
  white = '#FFFFFF',
  black = '#000000',
  grayLight = '#d9d9d9',
  gray = '#A8AAB6',

  blue = '#1890ff',
  green = '#5CAC54',
  orange = '#F7981C',
  red = '#D93732',

  darkLight = '#374050',
  dark = '#242C3B'
}

/**
 * Common colors for project
 */
export const colors = {
  primary: Colors.blue,
  // secondary: Colors.green,

  success: Colors.green,
  warning: Colors.orange,
  error: Colors.red
};

/**
 * Light theme
 */
const light = {
  ...colors,

  font: Colors.darkLight,
  fontSecondary: Colors.gray,
  fontHover: Colors.blue,
  fontDisabled: Colors.gray,

  border: Colors.grayLight,
  borderDisabled: Colors.grayLight,
  borderHover: Colors.blue,

  background: Colors.white,
  backgroundDisabled: Colors.white
};

/**
 * Dark theme
 */
const dark = {
  ...colors,

  font: Colors.white,
  fontSecondary: Colors.gray,
  fontHover: Colors.blue,
  fontDisabled: Colors.darkLight,

  border: Colors.darkLight,
  borderDisabled: Colors.darkLight,
  borderHover: Colors.darkLight,

  background: Colors.dark,
  backgroundDisabled: Colors.dark
};

export const theme = { light, dark };
