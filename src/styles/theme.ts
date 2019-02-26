import { colors } from './colors';

const common = {
  primary: colors.blue,
  secondary: colors.green,
  prominent: colors.orange,

  success: colors.green,
  warning: colors.orange,
  error: colors.red
};

export const light = {
  ...common,
  text: colors.black,
  textDisabled: colors.gray,
  border: colors.gray,
  background: colors.white
};

export const dark = {
  ...common,
  text: colors.white,
  textDisabled: colors.darkLight,
  background: colors.dark,
  border: colors.darkLight
};

export const theme = { light, dark };
