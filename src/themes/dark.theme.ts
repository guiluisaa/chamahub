import { DefaultTheme } from 'styled-components';

import { borderRadius } from './tokens/border.token';
import breakpoint from './tokens/breakpoint.token';
import { darkThemeButton } from './tokens/button.token';
import color from './tokens/color.token';
import { fontWeight } from './tokens/font.token';
import { darkThemeInput } from './tokens/input.token';

const darkTheme: DefaultTheme = {
  theme: 'dark',
  color,

  font: {
    family: "'Inter', sans-serif",
    weight: fontWeight,
    color: {
      primary: color.white,
      secondary: color.deepGray,
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
      secondary: color.deepBlack,
    },
  },

  components: {
    button: darkThemeButton,
    input: darkThemeInput,
  },
};

export default darkTheme;
