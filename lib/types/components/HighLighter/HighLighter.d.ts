/// <reference types="react" />
import * as T from './HighLighter.types';
declare function HighLighter(props: T.HighLighterProps): JSX.Element;
declare namespace HighLighter {
  var defaultProps: {
    color: string;
    opacity: number;
  };
}
export default HighLighter;
