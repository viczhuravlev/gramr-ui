import { ReactNode } from 'react';

import { ThemeSize, ThemeColors, ThemeType } from '../../styles/theme.types';

export interface ButtonProps {
  size?: ThemeSize;
  theme?: ThemeType;
  color?: ThemeColors;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
  children?: ReactNode;
}
