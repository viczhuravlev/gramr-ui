import React from 'react';
import renderer from 'react-test-renderer';

import Badge from './index';

describe('[component] Badge', () => {
  test('[Snapshot] Badge', () => {
    const component = renderer.create(
      <Badge>
        Steve fish muskellunge swallower triplefin blenny horsefish wolffish.
      </Badge>
    );

    expect(component).toMatchSnapshot();
  });
});
