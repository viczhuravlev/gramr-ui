import React from 'react';
import renderer from 'react-test-renderer';

import { Text } from './index';

describe('[component] Text', () => {
  test('[Snapshot] Text', () => {
    const component = renderer.create(
      <Text>
        Steve fish muskellunge swallower triplefin blenny horsefish wolffish.
      </Text>
    );

    expect(component).toMatchSnapshot();
  });
});
