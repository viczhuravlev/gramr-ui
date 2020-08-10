const sizesEnum = { xs: 'xs', s: 's', m: 'm', l: 'l', xl: 'xl' } as const;

export type SizeType = keyof typeof sizesEnum;

export const sizes: SizeType[] = Object.keys(sizesEnum).map(
  (name) => sizesEnum[name as SizeType]
);
