import React from 'react';
import { storiesOf } from '@storybook/react';

import { GlobalStyles } from './index';

storiesOf('GlobalStyles', module).add('Default', () => (
  <>
    <GlobalStyles />
    Set global styles
  </>
));
