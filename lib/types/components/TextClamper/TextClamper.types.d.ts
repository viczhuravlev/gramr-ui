import { ReactNode } from 'react';
export interface Clamper {
    clamp?: string;
}
export interface TextClamperProps extends Clamper {
    className?: string;
    children: ReactNode;
}
