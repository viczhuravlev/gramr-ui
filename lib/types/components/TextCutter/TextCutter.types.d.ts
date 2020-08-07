import { ReactNode, CSSProperties } from 'react';
export interface TextCutterDefaultProps {
  clamp: string | number;
}
export interface TextCutterProps extends Partial<TextCutterDefaultProps> {
  style?: CSSProperties;
  children: ReactNode;
  className?: string;
}
