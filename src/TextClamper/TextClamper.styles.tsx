import styled from '@emotion/styled';

import * as T from './TextClamper.types';

export const Clamper = styled.span<T.Clamper>`
  overflow: hidden;
  white-space: normal;
  /* stylelint-disable */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => props.clamp || '1'};
  /* stylelint-enable */
`;
