import { colors } from '../styles/theme';

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getColors() {
  return Object.keys(colors).filter(
    item => item !== '__docgenInfo' && item !== 'displayName'
  );
}
