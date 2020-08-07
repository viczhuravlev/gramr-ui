import React from 'react';

import { colors } from '../../styles/theme';

import * as T from './HighLighter.types';
import * as U from './HighLighter.utils';
import * as S from './HighLighter.styles';

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
            color={color}
            style={style}
            opacity={opacity}
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
  color: colors.orange,
  opacity: 0.2,
};

HighLighter.defaultProps = defaultProps;

export default HighLighter;
