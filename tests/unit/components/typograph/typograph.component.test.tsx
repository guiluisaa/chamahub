import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { Title, Paragraph } from '@/components/typograph/typograph.component';
import lightTheme from '@/themes/light.theme';

describe('<Title />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Title theme={lightTheme}>Some Title</Title>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the primary color as default', () => {
    const wrapper = shallow(<Title theme={lightTheme} />);
    expect(wrapper).toHaveStyleRule('color', '#424242');
  });

  it('should have the primary color when is set', () => {
    const wrapper = shallow(<Title theme={lightTheme} color="primary" />);
    expect(wrapper).toHaveStyleRule('color', '#424242');
  });

  it('should have the secondary color when is set', () => {
    const wrapper = shallow(<Title theme={lightTheme} color="secondary" />);
    expect(wrapper).toHaveStyleRule('color', '#969696');
  });
});

describe('<Paragraph />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(
      <Paragraph theme={lightTheme}>Some Text</Paragraph>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the primary color when is set', () => {
    const wrapper = shallow(<Paragraph theme={lightTheme} color="primary" />);
    expect(wrapper).toHaveStyleRule('color', '#424242');
  });

  it('should have the secondary when is set', () => {
    const wrapper = shallow(<Paragraph theme={lightTheme} color="secondary" />);
    expect(wrapper).toHaveStyleRule('color', '#969696');
  });
});
