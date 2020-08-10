import { ReactNode, CSSProperties } from 'react';
import { SizeType } from '../../styles/common';
export interface TextDefaultProps {
    size: SizeType;
    isThin: boolean;
    isBold: boolean;
    isBlock: boolean;
    isCaption: boolean;
}
export interface TextStyleProps extends Partial<TextDefaultProps> {
    color?: string;
}
export interface TextProps extends Partial<TextStyleProps> {
    style?: CSSProperties;
    children: ReactNode;
    className?: string;
}
