import React from 'react';
import { render } from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import App from './App';
import { getSentryDns, getIsProd } from './io/environment';

const isProd = getIsProd();

if (isProd) {
  Sentry.init({
    dsn: getSentryDns(),
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

render(<App />, document.getElementById('root'));
