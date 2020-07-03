import { styled } from 'linaria/react';

import { hexToRgb } from '../../utils/styles';

import * as T from './HighLighter.types';

export const HighLighter = styled.span<T.HighLighter>`
  background-color: ${(props) =>
    hexToRgb(props.color || '#F7981C', props.opacity) || 'transparent'};
`;
