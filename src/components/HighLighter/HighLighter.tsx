import React from 'react';

import * as S from './HighLighter.styles';
import * as T from './HighLighter.types';

function searchText(children: string, search: string): string[] {
  const pattern = new RegExp(`(${search})`, 'i');

  return children.split(pattern);
}

function HighLighter(props: T.HighLighterProps): JSX.Element {
  const { search, text, ...rest } = props;

  if (!text || !search || typeof text !== 'string') return <>{text}</>;

  const resultSearch = searchText(text, search);
  const searchLower = search.toLowerCase();

  return resultSearch && resultSearch.length < 2 ? (
    <>{text}</>
  ) : (
    <>
      {resultSearch.map(item =>
        item.toLowerCase() === searchLower ? <S.HighLighter {...rest}>{item}</S.HighLighter> : item
      )}
    </>
  );
}

HighLighter.defaultProps = {
  color: 'yellow',
  opacity: 0.1
};

export default HighLighter;
