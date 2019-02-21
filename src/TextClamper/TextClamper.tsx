import React from 'react';

import * as S from './TextClamper.styles';
import * as T from './TextClamper.types';

function TextClamper(props: T.TextClamperProps): JSX.Element | null {
  const { clamp, children, className } = props;

  if (!children) return null;

  return (
    <S.Clamper className={className} clamp={clamp}>
      {children}
    </S.Clamper>
  );
}

TextClamper.defaultProps = {
  clamp: '1'
};

export default TextClamper;
