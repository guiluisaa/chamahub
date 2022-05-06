import React from 'react';
import { shallow } from 'enzyme';

import Logo from '@/components/Logo';

jest.mock('styled-components', () => ({
  useTheme: () => ({
    theme: 'light',
    color: {
      blue: 'blue',
      white: 'white',
    },
  }),
}));

describe('<Logo />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
