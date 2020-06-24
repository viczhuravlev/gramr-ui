import { ReactNode } from 'react';

import { ThemeSize, ThemeType } from '../../styles/theme.types';

export interface ButtonProps {
  size?: ThemeSize;
  theme?: ThemeType;
  color?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
  children?: ReactNode;
}
