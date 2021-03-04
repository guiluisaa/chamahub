import React from 'react';
import { shallow } from 'enzyme';

import Header from '@/components/header/Header.component';

jest.mock('@/io/redux/theme/useTheme.hook', () => () => ({
  toggleTheme: jest.fn(),
}));

describe('<Header />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
