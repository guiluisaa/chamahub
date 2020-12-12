import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import { darkTheme } from '@/themes';
import { persistor, store } from '@/io/redux/store';
import GlobalStyle from './shared-styles/GlobalStyle';
import Routes from './Routes';

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default hot(module)(App);
