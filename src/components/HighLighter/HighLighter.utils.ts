export function searchText(text: string, search: string): string[] {
  const pattern = new RegExp(`(${search})`, 'i');

  return text.split(pattern);
}
