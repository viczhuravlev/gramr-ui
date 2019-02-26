export interface HighLighter {
    opacity?: number;
    color?: 'yellow' | 'green' | 'skyBlue';
}
export interface HighLighterProps extends HighLighter {
    text?: string;
    search?: string;
}
