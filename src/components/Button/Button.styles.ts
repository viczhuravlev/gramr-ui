import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { hexToRgb } from '../../utils/styles';
import { defineTheme } from '../../utils/theme';
import { ThemeLightKey } from '../../styles/theme.types';
import { theme, themeColors } from '../../styles/theme';

import * as T from './Button.types';

const sizeStyles = {
  s: css({
    height: '24px',
    padding: '0 7px',
    fontSize: '14px',
  }),
  m: css({
    height: '32px',
    padding: '0 15px',
    fontSize: '14px',
  }),
  l: css({
    height: '40px',
    padding: '0 20px',
    fontSize: '16px',
  }),
};

function getStylesTheme(
  props: T.ButtonProps,
  option: ThemeLightKey,
  optionDisabled: ThemeLightKey,
  colorsString?: string
) {
  const themeStrung = defineTheme(props.theme);

  if (props.isDisabled) {
    return theme[themeStrung][optionDisabled];
  }

  return props.color ? colorsString || props.color : theme[themeStrung][option];
}

export const Button = styled.button<T.ButtonProps>`
  ${(props) => sizeStyles[props.size || 'm'] || sizeStyles.m};
  border-radius: 4px;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};

  color: ${(props) =>
    getStylesTheme(props, 'font', 'fontDisabled', themeColors.white)};

  border: 1px solid
    ${(props) => getStylesTheme(props, 'border', 'borderDisabled')};

  background-color: ${(props) =>
    getStylesTheme(props, 'background', 'backgroundDisabled')};

  ${(props) =>
    props.isDisabled
      ? ''
      : `
        &:hover,
        &:focus,
        &:active {
          color: ${
            props.color
              ? themeColors.white
              : theme[defineTheme(props.theme)].fontHover
          };
          
          border-color: ${
            props.color
              ? props.color
              : theme[defineTheme(props.theme)].borderHover
          };
          
          background-color: ${props.color ? hexToRgb(props.color, 0.85) : ''};
         
          transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
        }
      `};
`;
