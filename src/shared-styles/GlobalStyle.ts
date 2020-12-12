import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    transition: 0.4s;
  }

  body {
    background-color: ${({ theme }) => theme.background.color.primary};
    color: ${({ theme }) => theme.font.color.primary};
  }
`;

export default GlobalStyle;
