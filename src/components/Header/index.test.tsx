import React from 'react';
import { shallow } from 'enzyme';

import Header from '@/components/Header';

jest.mock('@/hooks/useAppTheme.hook', () => () => ({
  toggleTheme: jest.fn(),
}));

describe('<Header />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
