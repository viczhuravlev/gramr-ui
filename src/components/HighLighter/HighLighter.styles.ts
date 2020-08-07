import { styled } from 'linaria/react';

import { hexToRgb } from '../../utils/styles';

import * as T from './HighLighter.types';

export const HighLighter = styled.span<Partial<T.HighLighterDefaultProps>>`
  background-color: ${(props) =>
    hexToRgb(props.color || '#F7981C', props.opacity) || 'transparent'};
`;
