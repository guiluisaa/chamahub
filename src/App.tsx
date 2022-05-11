import React, { FC } from 'react';
import { hot } from 'react-hot-loader';

import Routes from './Routes';

const App: FC = () => <Routes />;

export default hot(module)(App);
