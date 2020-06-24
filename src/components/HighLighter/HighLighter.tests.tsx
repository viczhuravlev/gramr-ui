import React from 'react';
import { mount } from 'enzyme';

import HighLighter from './HighLighter';
// import * as S from './HighLighter.styles';
// import * as T from './HighLighter.types';

// const styleColor = 'skyBlue';
// const styleOpacity = 12;
const search = 'ui';
const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

describe('[component] HighLighter', () => {
  it('[Snapshot] HighLighter', () => {
    const component = mount(<HighLighter text={text} search={search} />);

    expect(component).toMatchSnapshot();
  });

  // it('[props] search is empty', () => {
  //   const component = shallow(<HighLighter text={text} />);
  //
  //   expect(component.text()).toEqual(text);
  // });
  //
  // it('[props] search is wrong', () => {
  //   const searchWrong = 'asdasdasdas';
  //   const component = shallow(<HighLighter text={text} search={searchWrong} />);
  //
  //   expect(component.text()).toEqual(text);
  // });
  //
  // it('[props] text is empty', () => {
  //   const component = shallow(<HighLighter search={search} />);
  //
  //   expect(component.html()).toEqual('');
  // });
  //
  // it('[props] text is not string', () => {
  //   // @ts-ignore
  //   const component = shallow(<HighLighter search={styleOpacity} />);
  //
  //   expect(component.html()).toEqual('');
  // });
  //
  // it('[props] Color is custom ', () => {
  //   const component = mount<T.HighLighterProps>(
  //     <HighLighter text={text} search={search} color={styleColor} opacity={styleOpacity} />
  //   );
  //
  //   const styleComponents = component.find<T.HighLighter>(S.HighLighter);
  //
  //   // @ts-ignore
  //   [...styleComponents].forEach(item => {
  //     const { color, opacity, children } = mount<{ children: ReactNode } & T.HighLighter>(
  //       item
  //     ).props();
  //
  //     expect(children).toEqual(search);
  //     expect(color).toEqual(styleColor);
  //     expect(opacity).toEqual(styleOpacity);
  //   });
  // });
});
