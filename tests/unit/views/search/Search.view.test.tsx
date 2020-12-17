import React from 'react';
import { shallow } from 'enzyme';

import SearchView from '@/views/search/Search.view';

jest.mock('@/io/user/useUser.hook', () => () => ({
  user: {},
  getUser: jest.fn(),
  isLoading: false,
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ replace: jest.fn() }),
}));

describe('<SearchView />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<SearchView />);
    expect(wrapper).toMatchSnapshot();
  });
});
