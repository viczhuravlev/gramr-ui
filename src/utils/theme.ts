import { ThemeType } from '../styles/theme.types';

export function isDark(theme?: ThemeType): boolean {
  return theme ? theme === 'dark' : false;
}

export function defineTheme(theme?: ThemeType): ThemeType {
  return isDark(theme) ? 'dark' : 'light';
}
