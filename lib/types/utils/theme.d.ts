import { ThemeValues } from '../styles/theme';
declare type Theme = 'light' | 'dark';
declare type ThemeMode = 'auto' | Theme;
export declare function getCurrentMode(): ThemeMode | string | null;
export declare function turnOnTheme(mode: ThemeMode): void;
interface InitThemeParams {
    light?: ThemeValues;
    dark?: ThemeValues;
    options?: {
        defaultMode?: Theme;
        autoDetect?: boolean;
    };
}
export declare function initTheme(params?: InitThemeParams): void;
export {};
