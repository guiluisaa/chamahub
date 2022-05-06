import React from 'react';
import { shallow } from 'enzyme';

import Container from '@/components/Container';
import { lightTheme } from '@/themes';

describe('<Container />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Container theme={lightTheme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
