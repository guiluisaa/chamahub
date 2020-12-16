import React from 'react';
import { shallow } from 'enzyme';

import Button from '@/components/button/Button.component';
import { lightTheme } from '@/themes';

describe('<Button />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Button theme={lightTheme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
