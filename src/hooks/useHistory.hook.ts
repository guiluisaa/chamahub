import { useCallback } from 'react';
import { useApolloClient } from '@apollo/client';

import { useGetTermsQuery } from '@graphql';
import termsVar from '@/io/graphql/local-vars/termsVar';

const useHistory = () => {
  const client = useApolloClient();
  const { data, loading } = useGetTermsQuery();

  const records = data?.terms ?? [];

  const addRecord = useCallback((term: string) => {
    client.cache.evict({ fieldName: 'terms' });
    client.cache.gc();

    const newTermsArray = [
      { term, createdAt: new Date().toISOString() },
      ...records,
    ];

    localStorage.setItem('terms', JSON.stringify(newTermsArray));
    termsVar(newTermsArray);
  }, []);

  return {
    records,
    isLoading: loading,
    addRecord,
  };
};

export default useHistory;
