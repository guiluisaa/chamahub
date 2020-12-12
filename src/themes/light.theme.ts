import { DefaultTheme } from 'styled-components';

import { borderRadius } from './tokens/border.token';
import breakpoint from './tokens/breakpoint.token';
import color from './tokens/color.token';
import { fontWeight } from './tokens/font.token';

const lightTheme: DefaultTheme = {
  theme: 'light',
  color,

  font: {
    family: "'Inter', sans-serif",
    weight: fontWeight,
    color: {
      primary: color.black,
      secondary: color.gray,
    },
  },

  border: {
    radius: borderRadius,
    color: color.gray,
  },

  breakpoint,

  background: {
    color: {
      primary: '#f9f9f9',
      secondary: color.white,
    },
  },
};

export default lightTheme;
