export declare type SizeType = 's' | 'm' | 'l';
export declare type ThemeType = 'light' | 'dark';
interface Theme {
    theme: ThemeType;
}
export declare function isDark(props: Theme): boolean;
export declare function defineTheme(props: Theme): ThemeType;
export {};
