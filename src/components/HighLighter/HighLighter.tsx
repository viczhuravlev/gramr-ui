import React from 'react';

import * as T from './HighLighter.types';
import * as U from './HighLighter.utils';
import * as S from './HighLighter.styles';
import { defaultLight } from '../../styles/theme';

function HighLighter(props: T.HighLighterProps): JSX.Element | null {
  const { style, color, search, opacity, children, className } = props;

  if (!children) {
    return null;
  }

  if (!search) {
    return <>{children}</>;
  }

  const resultSearch = U.searchText(children, search);
  const searchLower = search.toLowerCase();

  if (resultSearch?.length < 2) {
    return <>{children}</>;
  }

  return (
    <>
      {resultSearch.map((word, index) => {
        if (word.toLowerCase() !== searchLower) {
          return word;
        }

        return (
          <S.HighLighter
            key={index}
            color={color || defaultLight['--gramr-ui-prominent-color']}
            style={style}
            opacity={opacity || 0.4}
            className={className}
          >
            {word}
          </S.HighLighter>
        );
      })}
    </>
  );
}

const defaultProps: T.HighLighterDefaultProps = {
  color: defaultLight['--gramr-ui-prominent-color'],
  opacity: 0.4,
};

HighLighter.defaultProps = defaultProps;

export default HighLighter;
