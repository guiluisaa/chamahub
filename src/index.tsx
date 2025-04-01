import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
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
} from '@/environment';
import cache from '@/graphql/cache';
import typeDefs from '@/graphql/local-schema.graphql';

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
  cache,
  headers: { Authorization: `bearer ${getGithubGraphqlApiToken()}` },
  typeDefs,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
);
