import React from 'react';
import { shallow } from 'enzyme';

import Input from '@/components/Input';
import { lightTheme } from '@/themes';

describe('<Input />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(
      <Input theme={lightTheme} placeholder="Type the username" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
