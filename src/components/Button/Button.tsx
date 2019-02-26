import React, { FC } from 'react';

import * as S from './Button.styles';
import * as T from './Button.types';

const Button: FC<T.ButtonProps> = ({
  size,
  theme,
  onClick,
  children,
  className,
  isDisabled,
  ...rest
}) => {
  if (!children) return null;

  return (
    <S.Button
      // size={size}
      theme={theme}
      disabled={isDisabled}
      isDisabled={isDisabled}
      className={className}
      onClick={isDisabled ? undefined : onClick}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

Button.defaultProps = {
  size: 'm',
  theme: 'light',
  isDisabled: false
};

export default Button;
