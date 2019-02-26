import { ReactNode } from 'react';

export interface Clamper {
  /** Default: 1 */
  clamp?: string;
}

export interface TextClamperProps extends Clamper {
  className?: string;
  children: ReactNode;
}
