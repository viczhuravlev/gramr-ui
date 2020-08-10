/* eslint-disable @typescript-eslint/no-use-before-define */

import { defaultLight, defaultDark, ThemeValues } from '../styles/theme';

import * as Log from './log';

function getRoot(): HTMLElement {
  return document.documentElement;
}

function setValueCSSVariable(name: string, value: string): void {
  getRoot().style.setProperty(name, value);
}

type Theme = 'light' | 'dark';
type ThemeMode = 'auto' | Theme;

const THEME_MODE_NAME = 'gramr-ui-theme-mode';
const THEME_LIGHT_MODE = 'gramr-ui-theme-light';
const THEME_DARK_MODE = 'gramr-ui-theme-dark';

const lightMedia = window.matchMedia('(prefers-color-scheme: light)');
const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');

/**
 * MODE
 */
function setCurrentMode(name: ThemeMode): void {
  localStorage.setItem(THEME_MODE_NAME, name);
}

export function getCurrentMode(): ThemeMode | string | null {
  return localStorage.getItem(THEME_MODE_NAME);
}

function checkMode(name: Theme | string): boolean {
  switch (name) {
    case 'light': {
      return lightMedia.matches;
    }

    case 'dark': {
      return darkMedia.matches;
    }

    default: {
      return window.matchMedia(`(prefers-color-scheme: ${name})`).matches;
    }
  }
}

function activateMode(theme?: ThemeValues | null): void {
  if (!theme) {
    Log.warn('Failed to activate mode.');

    return;
  }

  Object.keys(theme).forEach((name) => {
    setValueCSSVariable(name, theme[name as keyof ThemeValues]);
  });
}

function turnOnLightMode() {
  activateMode(getThemeValues(THEME_LIGHT_MODE));
}

function turnOnDarkMode() {
  activateMode(getThemeValues(THEME_DARK_MODE));
}

function turnOnDefaultMode(defaultMode: Theme) {
  if (defaultMode === 'dark') {
    turnOnDarkMode();
  } else {
    turnOnLightMode();
  }
}

function autoApplyLightMode(event: MediaQueryListEvent) {
  if (event.matches) {
    turnOnLightMode();
  }
}

function autoApplyDarkMode(event: MediaQueryListEvent) {
  if (event.matches) {
    turnOnDarkMode();
  }
}

export function turnOnTheme(mode: ThemeMode) {
  const currentMode = getCurrentMode();

  if (currentMode === mode) {
    return;
  }

  if (currentMode === 'auto') {
    lightMedia.removeListener(autoApplyLightMode);
    darkMedia.removeListener(autoApplyDarkMode);
  }

  setCurrentMode(mode);

  switch (mode) {
    case 'dark': {
      turnOnDarkMode();

      return;
    }

    case 'auto': {
      autoTheme();

      return;
    }

    case 'light':
    default: {
      turnOnLightMode();
    }
  }
}

/**
 * THEME
 */

function setThemeValues(
  name: typeof THEME_LIGHT_MODE | typeof THEME_DARK_MODE,
  theme: ThemeValues
) {
  localStorage.setItem(name, JSON.stringify(theme));
}

function getThemeValues(
  name: typeof THEME_LIGHT_MODE | typeof THEME_DARK_MODE
): ThemeValues | null {
  const theme = localStorage.getItem(name);

  if (theme === null) {
    return theme;
  }

  try {
    return JSON.parse(theme);
  } catch (error) {
    error(error);

    return null;
  }
}

function autoTheme(defaultMode: Theme = 'light') {
  const isDarkMode = checkMode('dark');
  const isLightMode = checkMode('light');
  const isNotSpecified = checkMode('no-preference');

  const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

  if (isNotSpecified || hasNoSupport) {
    Log.warn(
      `You specified no preference for a color scheme or your browser does not support it: ${defaultMode} mode turn on.`
    );

    turnOnDefaultMode(defaultMode);

    return;
  }

  if (isLightMode) {
    turnOnLightMode();
  } else if (isDarkMode) {
    turnOnDarkMode();
  }

  lightMedia.removeListener(autoApplyLightMode);
  lightMedia.addListener(autoApplyLightMode);

  darkMedia.removeListener(autoApplyDarkMode);
  darkMedia.addListener(autoApplyDarkMode);
}

interface InitThemeParams {
  light?: ThemeValues;
  dark?: ThemeValues;
  options?: {
    defaultMode?: Theme;
    autoDetect?: boolean;
  };
}

export function initTheme(params: InitThemeParams = {}) {
  const { light = defaultLight, dark = defaultDark, options = {} } = params;
  const { defaultMode = 'light', autoDetect = true } = options;

  Log.info('init theme');

  setThemeValues(THEME_LIGHT_MODE, light);
  setThemeValues(THEME_DARK_MODE, dark);

  const currentMode = getCurrentMode();

  switch (currentMode) {
    case 'light': {
      turnOnLightMode();

      return;
    }

    case 'dark': {
      turnOnDarkMode();

      return;
    }

    case 'auto':
    default: {
      if (!autoDetect) {
        setCurrentMode(defaultMode);

        turnOnDefaultMode(defaultMode);

        return;
      }

      setCurrentMode('auto');

      autoTheme(defaultMode);
    }
  }
}
