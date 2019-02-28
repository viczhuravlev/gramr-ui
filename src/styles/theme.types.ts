import { theme, colors, themeColors } from './theme';

/**
 * The reference model is a bright topic.
 */
export type ThemeLightKey = keyof typeof theme.light;
export type ThemeDarkKey = keyof typeof theme.dark;
export type ThemeType = keyof typeof theme;

export type Colors = keyof typeof colors;
export type ThemeColors = keyof typeof themeColors;
export type AllColors = Colors & ThemeColors;

export type ThemeSize = 's' | 'm' | 'l';

export interface Theme {
  [key: string]: AllColors;
}

export interface ThemeProps {
  theme: ThemeType;
}
