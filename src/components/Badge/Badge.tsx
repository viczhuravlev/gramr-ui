import React from 'react';

import * as T from './Badge.types';
import * as S from './Badge.styles';

function Badge(props: T.BadgeProps): JSX.Element {
  const { style, children, className, ...otherProps } = props;

  return (
    <S.Badge style={style} className={className} {...otherProps}>
      {children}
    </S.Badge>
  );
}

const defaultProps: T.BadgeDefaultProps = {
  size: 'm',
};

Badge.defaultProps = defaultProps;

export default Badge;
