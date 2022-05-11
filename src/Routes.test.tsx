import React from 'react';
import { shallow } from 'enzyme';

import Routes from '@/Routes';

jest.mock('@/hooks/useAppTheme.hook', () => () => ({
  theme: {},
  toggleTheme: jest.fn(),
}));

describe('<Routes />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});
