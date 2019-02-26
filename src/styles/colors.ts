export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  grayLight: '#EAEDF1',
  gray: '#A8AAB6',

  blue: '#1890ff',
  green: '#5CAC54',
  orange: '#F7981C',
  red: '#D93732',

  darkLight: '#333D4D',
  dark: '#242C3B'
};

export function hexToRgb(hex: string, opacity: number = 1): string | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexLocal = hex.replace(
    shorthandRegex,
    (m, r, g, b) => r + r + g + g + b + b
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexLocal);

  if (!result) return null;

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
