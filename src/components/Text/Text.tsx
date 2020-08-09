import React from 'react';

import { stylesTextSize } from '../../styles/typography';

import { mergeClassNames } from '../../utils/helpers';

import * as T from './Text.types';
import * as S from './Text.styles';

function Text(props: T.TextProps): JSX.Element {
  const {
    size,
    color,
    style,
    isBold,
    isBlock,
    children,
    isCaption,
    className,
    ...otherProps
  } = props;

  const Wrapper = isBlock ? S.Text : S.TextInline;

  return (
    <Wrapper
      data-size={size}
      color={color}
      style={style}
      isBold={isBold}
      isBlock={isBlock}
      isCaption={isCaption}
      className={mergeClassNames(stylesTextSize, className)}
      {...otherProps}
    >
      {children}
    </Wrapper>
  );
}

const defaultProps: T.TextDefaultProps = {
  size: 'm',
  isThin: false,
  isBold: false,
  isBlock: false,
  isCaption: false,
};

Text.defaultProps = defaultProps;

export default Text;
