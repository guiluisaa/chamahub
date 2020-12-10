import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    white: '#FFF',
    black: '#424242',

    background: '#fff',
    border: 'rgba(0,0,0,0.1)',

    primary: '#406ae0',
    secondary: '#eb7338',

    success: '#2AD178',
    warning: '#FABD59',
    danger: '#FF5B68',
  },

  font: {
    family: {
      primary: "'Inter', sans-serif",
    },

    weight: {
      regular: 400,
      bold: 700,
    },

    color: {
      primary: '#424242',
      secondary: '#969696',
    },
  },

  borderRadius: {
    default: '3px',
  },

  breakpoint: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1300,
  },
};

export default theme;
