import React from 'react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { configure, addDecorator } from '@storybook/react';

import GlobalStyles from './GlobalStyles';
import { TableComponent } from './TableComponent';

const styleContainer = { padding: '10px' };

function WithGlobalStyles(story) {
  return (
    <div id="app">
      <div style={styleContainer}>
        <GlobalStyles />
        {story()}
      </div>
    </div>
  );
}

const styles = {
  infoBody: {
    padding: 0,
    margin: 0,
  },
  h1: {
    display: 'none',
  },
  propTableHead: {
    margin: '0 0 10px 0',
  },
};

if (process.env.NODE_ENV === 'production') {
  addDecorator(
    withPropsTable({
      TableComponent,
      styles,
    })
  );
}

addDecorator(WithGlobalStyles);

// require welcome screen
require('../../src/index.stories');

// automatically import all files ending in *.stories.js
const req = require.context('../../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
