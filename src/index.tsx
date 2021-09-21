import React from 'react';
import { render } from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
import {
  getSentryDns,
  getIsProd,
  getGithubGraphqlApiUrl,
  getGithubGraphqlApiToken,
} from './io/environment';

const isProd = getIsProd();

if (isProd) {
  Sentry.init({
    dsn: getSentryDns(),
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

const client = new ApolloClient({
  uri: getGithubGraphqlApiUrl(),
  cache: new InMemoryCache(),
  headers: {
    Authorization: `bearer ${getGithubGraphqlApiToken()}`,
  },
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
