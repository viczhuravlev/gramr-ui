import React from 'react';

import { shallow } from 'enzyme';
import { Button } from '../index';

describe('My Button', () => {
  it('renders button', () => {
    const wrapper = shallow(<Button text={'Text for button'} />);

    console.log(wrapper);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').html()).toMatch(/Hello, Enzyme/)
  });

  it('renders', () => {
    const wrapper = shallow(
      <div>
        <h1>Hello, Enzyme!</h1>
      </div>
    );
    expect(wrapper.find('h1').html()).toMatch(/Hello, Enzyme/);
  });

  it('renders snapshots, too', () => {
    const wrapper = shallow(
      <div>
        <h1>Hello, Enzyme!</h1>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
