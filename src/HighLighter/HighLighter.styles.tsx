import styled from '@emotion/styled';

import * as T from './HighLighter.types';

export const HighLighter = styled.span<T.HighLighter>`
  background-color: ${props => props.color};
  opacity: ${props => props.opacity};
`;
