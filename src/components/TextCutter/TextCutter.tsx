import React from 'react';

import * as T from './TextCutter.types';
import * as S from './TextCutter.styles';

function TextCutter(props: T.TextCutterProps): JSX.Element | null {
  const { clamp, style, children, className, ...otherProps } = props;

  if (!children) {
    return null;
  }

  return (
    <S.Container
      clamp={clamp || '1'}
      style={style}
      className={className}
      {...otherProps}
    >
      {children}
    </S.Container>
  );
}

const defaultProps: T.TextCutterDefaultProps = {
  clamp: '1',
};

TextCutter.defaultProps = defaultProps;

export default TextCutter;
