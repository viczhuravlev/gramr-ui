export interface HighLighter {
  /**
   * Default:  0.1
   */
  opacity?: number;
  /**
   * Default: yellow
   */
  color?: 'yellow' | 'green' | 'skyBlue';
}

export interface HighLighterProps extends HighLighter {
  text?: string;
  search?: string;
}
