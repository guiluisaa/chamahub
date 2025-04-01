import React, { FC } from 'react';

import { lightTheme } from './themes';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './Routes';

import GlobalStyle from './shared-styles/GlobalStyle';
import { darkTheme } from './themes';
import useAppTheme from './hooks/useAppTheme.hook';

const App: FC = () => {
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />

      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
