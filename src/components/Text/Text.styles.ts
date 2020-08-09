import { styled } from 'linaria/react';

import * as T from './Text.types';
import * as U from './Text.utils';

export const Text = styled.div<T.TextStyleProps>`
  font-weight: ${U.getFontWeight};
  color: ${U.getColor};
  text-transform: ${U.getTextTransform};
`;

export const TextInline = styled.span<T.TextStyleProps>`
  font-weight: ${U.getFontWeight};
  color: ${U.getColor};
  text-transform: ${U.getTextTransform};
`;
