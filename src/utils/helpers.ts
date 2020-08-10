export function mergeClassNames(
  ...args: (string | null | undefined)[]
): string {
  return args.filter((classname) => typeof classname === 'string').join(' ');
}

// export function capitalizeFirstLetter(string: string): string {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
