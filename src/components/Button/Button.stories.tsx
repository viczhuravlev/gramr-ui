import React from 'react';
import { storiesOf } from '@storybook/react';

import { colors } from '../../styles/theme';
import { getColors, capitalizeFirstLetter } from '../../utils/helpers';

import { Button } from './index';

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Disabled', () => <Button isDisabled>isDisabled</Button>)
  .add('Colors', () => (
    <>
      {getColors().map((item) => (
        <Button color={colors[item]}>{capitalizeFirstLetter(item)}</Button>
      ))}
    </>
  ))
  .add('Size', () => (
    <>
      <Button size="s">Small</Button>
      <Button size="m">Medium</Button>
      <Button size="l">Large</Button>
    </>
  ))
  .add('Dark', () => (
    <>
      <Button theme="dark">Default</Button>
      <Button theme="dark" isDisabled>
        isDisabled
      </Button>
      {getColors().map((item) => (
        <Button color={colors[item]}>{capitalizeFirstLetter(item)}</Button>
      ))}
    </>
  ));
