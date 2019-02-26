import { theme, colors, Colors } from './theme';

/**
 * The reference model is a bright topic.
 */
export type ThemeLightKey = keyof typeof theme.light;
export type ThemeDarkKey = keyof typeof theme.dark;
export type ThemeType = keyof typeof theme;

export type ThemeColors = keyof typeof colors;
export type ThemeSize = 's' | 'm' | 'l';

export interface Theme {
  [key: string]: Colors;
}

export interface ThemeProps {
  theme: ThemeType;
}
