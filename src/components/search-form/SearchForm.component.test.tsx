import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from '@/components/search-form/SearchForm.component';

jest.mock('@/io/user/useUserRepos.hook', () => () => ({
  repos: [],
  getUserRepos: jest.fn(),
  isLoading: false,
}));

jest.mock('react-router-dom', () => ({
  useLocation: () => ({ sarch: '' }),
}));

describe('<SearchForm />', () => {
  it('should match snapchat', () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(<SearchForm onSubmit={onSubmit} />);
    expect(wrapper).toMatchSnapshot();
  });
});
