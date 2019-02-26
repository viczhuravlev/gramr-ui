export type SizeType = 's' | 'm' | 'l';

export type ThemeType = 'light' | 'dark';

interface Theme {
  theme: ThemeType;
}

export function isDark(props: Theme): boolean {
  return props.theme === 'dark';
}

export function defineTheme(props: Theme): ThemeType {
  return isDark(props) ? 'dark' : 'light';
}
