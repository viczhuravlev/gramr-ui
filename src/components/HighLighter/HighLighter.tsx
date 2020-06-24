import React from 'react';

import { colors } from '../../styles/theme';

import * as S from './HighLighter.styles';
import * as T from './HighLighter.types';

function searchText(children: string, search: string): string[] {
  const pattern = new RegExp(`(${search})`, 'i');

  return children.split(pattern);
}

function HighLighter(props: T.HighLighterProps): JSX.Element {
  const { search, text, ...rest } = props;

  if (!text || !search || typeof text !== 'string') {
    return <>{text}</>;
  }

  const resultSearch = searchText(text, search);
  const searchLower = search.toLowerCase();

  return resultSearch && resultSearch.length < 2 ? (
    <>{text}</>
  ) : (
    <>
      {resultSearch.map((item, idx) =>
        item.toLowerCase() === searchLower ? (
          <S.HighLighter key={idx} {...rest}>
            {item}
          </S.HighLighter>
        ) : (
          item
        )
      )}
    </>
  );
}

HighLighter.defaultProps = {
  color: colors.orange,
  opacity: 0.2,
};

export default HighLighter;
