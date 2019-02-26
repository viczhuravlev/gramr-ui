import styled from '@emotion/styled';

import { theme } from '../../styles/theme';
import { defineTheme } from '../../utils/theme';

import * as T from './Button.types';

export const Button = styled.button<T.ButtonProps>`
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};

  // theme
  color: ${props => theme[defineTheme(props)][props.isDisabled ? 'textDisabled' : 'text']};
  border: 1px solid ${props => theme[defineTheme(props)].border}};
  background-color: ${props => theme[defineTheme(props)].background};
`;
