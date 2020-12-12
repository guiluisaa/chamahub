import 'styled-components';

import { Color } from '@/themes/tokens/color.token';
import { Font } from '@/themes/tokens/font.token';
import { Border } from '@/themes/tokens/border.token';
import { Breakpoint } from '@/themes/tokens/breakpoint.token';
import { ThemeType } from '@/themes/tokens/theme.token';
import { Background } from '@/themes/tokens/background.token';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: ThemeType;

    color: Color;
    font: Font;
    border: Border;
    breakpoint: Breakpoint;
    background: Background;
  }
}
