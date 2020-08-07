import { CSSProperties } from 'react';

export interface HighLighterDefaultProps {
  color: string;
  opacity: number;
}

export interface HighLighterProps extends Partial<HighLighterDefaultProps> {
  style?: CSSProperties;
  search?: string | null;
  children: string;
  className?: string;
}
