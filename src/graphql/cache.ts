import { InMemoryCache } from '@apollo/client';

import termsVar from './local-vars/termsVar';
import themeVar from './local-vars/themeVar';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        theme: {
          read: () => themeVar(),
        },
        terms: {
          read: () => termsVar(),
        },
      },
    },
  },
});

export default cache;
