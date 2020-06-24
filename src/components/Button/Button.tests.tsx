import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

describe('[component] Button', () => {
  it('[Snapshot] Button', () => {
    const component = mount(<Button color="orange">Test</Button>);

    expect(component).toMatchSnapshot();
  });
});
