import React from 'react';
import { storiesOf } from '@storybook/react';

import { TextClamper } from './index';

const warning =
  "Warning! This is the support for WebKit's propriety and undocumented implementation of line clamp.";
const moreInfo =
  "More info: Line clamps are part of the CSS Overflow Module Level 3 which is currently in Editor's Draft and totally unsupported at the moment.";

storiesOf('TextClamper', module)
  .add('Default', () => (
    <>
      <p>
        {warning}
        <br />
        {moreInfo}
      </p>
      <br />
      <TextClamper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TextClamper>
    </>
  ))
  .add('Clamp', () => (
    <TextClamper clamp="3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </TextClamper>
  ));
