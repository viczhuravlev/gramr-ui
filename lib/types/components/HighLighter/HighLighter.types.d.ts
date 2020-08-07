export interface HighLighter {
  opacity?: number;
  color?: string;
}
export interface HighLighterProps extends HighLighter {
  text?: string;
  search?: string;
}
