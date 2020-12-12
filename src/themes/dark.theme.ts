import { DefaultTheme } from 'styled-components';

import { borderRadius } from './tokens/border.token';
import breakpoint from './tokens/breakpoint.token';
import color from './tokens/color.token';
import { fontWeight } from './tokens/font.token';

const darkTheme: DefaultTheme = {
  theme: 'dark',
  color,

  font: {
    family: "'Inter', sans-serif",
    weight: fontWeight,
    color: {
      primary: color.white,
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
  },

  border: {
    radius: borderRadius,
    color: '#333',
  },

  breakpoint,

  background: {
    color: {
      primary: color.black,
      secondary: '#000',
    },
  },
};

export default darkTheme;
