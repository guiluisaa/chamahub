import React from 'react';
import { shallow } from 'enzyme';

import Alert from '@/components/alert/Alert.component';
import { lightTheme } from '@/themes';

describe('<Alert />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Alert theme={lightTheme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
