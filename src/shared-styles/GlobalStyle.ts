import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background.color.primary};
    color: ${({ theme }) => theme.font.color.primary};
  }
`;

export default GlobalStyle;
