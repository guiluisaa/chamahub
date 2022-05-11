import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import GlobalStyle from './shared-styles/GlobalStyle';
import { darkTheme, lightTheme } from './themes';
import useAppTheme from '@/hooks/useAppTheme.hook';
import { toLoadable } from './utils';

// Views
import Redirect404View from '@/views/404';
import IndexView from '@/views/Index';
import SearchView from '@/views/Search';
import { ThemeEnum } from '@graphql';

// Lazy loading views
const HistoryView = toLoadable(() => import('@/views/History'));

const Routes: FC = () => {
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme === ThemeEnum.Dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={IndexView} />
            <Route exact path="/search" component={SearchView} />
            <Route exact path="/history" component={HistoryView} />

            <Route component={Redirect404View} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
