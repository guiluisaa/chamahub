import { makeVar } from '@apollo/client';
import { ThemeEnum } from '@graphql';

const currentTheme = localStorage.getItem('theme');

const theme =
  currentTheme === ThemeEnum.Dark ? ThemeEnum.Dark : ThemeEnum.Light;

const themeVar = makeVar<ThemeEnum>(theme);

export default themeVar;
