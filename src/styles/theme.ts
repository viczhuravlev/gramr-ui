export type ThemeValues = {
  '--gramr-ui-primary-color': string;
  '--gramr-ui-secondary-color': string;
  '--gramr-ui-prominent-color': string;

  '--gramr-ui-font-color': string;
  '--gramr-ui-font-color-secondary': string;

  '--gramr-ui-background-color': string;
};

const theme = {
  white: '#FFFFFF',
  black: '#000000',
  'primary-color': '#1991EB',
  'secondary-color': '#09C199',
  'prominent-color': '#F7981C',
};

export const defaultLight: ThemeValues = {
  '--gramr-ui-primary-color': theme['primary-color'],
  '--gramr-ui-secondary-color': theme['secondary-color'],
  '--gramr-ui-prominent-color': theme['prominent-color'],

  '--gramr-ui-font-color': '#333F52',
  '--gramr-ui-font-color-secondary': '#B0B0B1',

  '--gramr-ui-background-color': '#F8FAFB',
};

export const defaultDark: ThemeValues = {
  '--gramr-ui-primary-color': theme['primary-color'],
  '--gramr-ui-secondary-color': theme['secondary-color'],
  '--gramr-ui-prominent-color': theme['prominent-color'],

  '--gramr-ui-font-color': theme.white,
  '--gramr-ui-font-color-secondary': '#B0B0B1',

  '--gramr-ui-background-color': '#333F52',
};
