import React from 'react';
import { shallow } from 'enzyme';

import Layout from '@/components/Layout';

describe('<Layout />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });
});
