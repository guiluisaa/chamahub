import axios from 'axios';

import { getApiUrl } from './environment';

const api = axios.create({
  baseURL: `${getApiUrl()}`,

  headers: {
    'content-type': 'application/json; charset=utf-8',
    Accept: 'application/vnd.github.v3+json',
  },
});

export default api;
