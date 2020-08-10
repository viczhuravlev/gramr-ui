import React from 'react';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import { storiesOf } from '@storybook/react';

import { sizes } from '../../styles/common';

import BadgeOrigin from './index';

const Badge = styled(BadgeOrigin)`
  & + & {
    margin-left: 8px;
  }
`;

const NewBadge = styled(Badge)`
  background-color: #536390;
`;

const newStyle = css`
  color: var(--gramr-ui-font-color);

  background-color: transparent;
  box-shadow: 0 0 0 1px var(--gramr-ui-font-color) inset;
`;

storiesOf('Badge', module)
  .add('Default', () => (
    <>
      <Badge>5</Badge>
      <Badge>99+</Badge>
      <Badge>999+</Badge>
      <Badge>9999+</Badge>
      <Badge>99999+</Badge>
      <Badge>Badge</Badge>
      <Badge>Badge with big text</Badge>
    </>
  ))
  .add('Size', () => (
    <>
      {sizes.map((size) => (
        <Badge size={size}>{size}</Badge>
      ))}
    </>
  ))
  .add('Custom style', () => (
    <>
      <Badge>Default</Badge>
      <NewBadge>Styled</NewBadge>
      <Badge className={newStyle}>New style</Badge>
    </>
  ));
