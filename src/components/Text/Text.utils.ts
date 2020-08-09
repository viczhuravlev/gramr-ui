import * as T from './Text.types';

export const getColor = (props: T.TextStyleProps) => props.color || '';

export const getTextTransform = (props: T.TextStyleProps) =>
  props.isCaption ? 'uppercase' : 'inherit';

export const getFontWeight = (props: T.TextStyleProps) => {
  if (props.isBold) {
    return 700;
  }

  if (props.isThin) {
    return 100;
  }

  return 400;
};
