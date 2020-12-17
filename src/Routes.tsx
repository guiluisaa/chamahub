import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { toLoadable } from '@/utils';
import Layout from './components/layout/Layout.component';
import GlobalStyle from './shared-styles/GlobalStyle';
import { darkTheme, lightTheme } from './themes';
import useTheme from '@/io/redux/theme/useTheme.hook';

// Lazy Loading Views
const Redirect404View = toLoadable(
  () => import('@/views/404/Redirect404.view')
);

const IndexView = toLoadable(() => import('@/views/index/Index.view'));

const Routes: FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={IndexView} />

            <Route component={Redirect404View} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
