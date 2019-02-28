import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('[component] Button', () => {
  it('[Snapshot] Button', () => {
    const component = renderer
      .create(<Button color="orange">Test</Button>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
