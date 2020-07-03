import { theme, colors, themeColors } from './theme';
export declare type ThemeLightKey = keyof typeof theme.light;
export declare type ThemeDarkKey = keyof typeof theme.dark;
export declare type ThemeType = keyof typeof theme;
export declare type Colors = keyof typeof colors;
export declare type ThemeColors = keyof typeof themeColors;
export declare type AllColors = Colors & ThemeColors;
export declare type ThemeSize = 's' | 'm' | 'l';
export interface Theme {
  [key: string]: AllColors;
}
export interface ThemeProps {
  theme: ThemeType;
}
