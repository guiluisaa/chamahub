import { InMemoryCache } from '@apollo/client';

import themeVar from './local-vars/themeVar';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        theme: {
          read: () => themeVar(),
        },
      },
    },
  },
});

export default cache;
