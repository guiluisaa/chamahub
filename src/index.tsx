import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import App from './App';
import { getSentryDns, getIsProd } from '@/environment';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const isProd = getIsProd();

if (isProd) {
  Sentry.init({
    dsn: getSentryDns(),
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
