import { styled } from 'linaria/react';

import * as T from './TextCutter.types';

export const Container = styled.span<T.TextCutterDefaultProps>`
  display: -webkit-box;

  overflow: hidden;

  white-space: normal;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.clamp || '1'};
`;
