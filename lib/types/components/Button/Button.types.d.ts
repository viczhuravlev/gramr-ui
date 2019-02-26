import { ReactNode } from 'react';
import { SizeType, ThemeType } from '../../utils/theme';
export interface ButtonProps {
    className?: string;
    children?: ReactNode;
    size?: SizeType;
    theme?: ThemeType;
    onClick?: () => void;
    isDisabled?: boolean;
}
