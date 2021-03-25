import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/io/redux/store';
import Routes from './Routes';
import { getEnvironment, getEnv } from '@/io/environment';

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
      {getEnvironment()}
      <br />
      {getEnv()}
    </PersistGate>
  </Provider>
);

export default hot(module)(App);
