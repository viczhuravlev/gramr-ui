export interface HighLighter {
  /**
   * Default:  0.1
   */
  opacity?: number;
  /**
   * Default: #F7981C
   */
  color?: string;
}

export interface HighLighterProps extends HighLighter {
  text?: string;
  search?: string;
}
