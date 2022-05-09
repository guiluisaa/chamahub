import React from 'react';
import { render } from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { ApolloClient, ApolloProvider } from '@apollo/client';

import App from './App';
import {
  getSentryDns,
  getIsProd,
  getGithubGraphqlApiUrl,
  getGithubGraphqlApiToken,
} from './io/environment';
import cache from '@/io/graphql/cache.graphql';
import typeDefs from '@/io/graphql/local-schema.graphql';

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
  cache: cache,
  headers: { Authorization: `bearer ${getGithubGraphqlApiToken()}` },
  typeDefs,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
