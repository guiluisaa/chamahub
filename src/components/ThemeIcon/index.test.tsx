import React from 'react';
import { shallow } from 'enzyme';

import ThemeIcon from '@/components/ThemeIcon';

jest.mock('styled-components', () => ({
  useTheme: () => ({
    theme: 'light',
    color: {
      black: 'black',
      white: 'white',
    },
  }),
}));

describe('<ThemeIcon />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<ThemeIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
