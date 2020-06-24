export function hexToRgb(hex: string, opacity = 1): string | null {
  if (!hex) return null;

  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexLocal = hex.replace(
    shorthandRegex,
    (_m: string, r: string, g: string, b: string) => r + r + g + g + b + b
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexLocal);

  if (!result) return null;

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
