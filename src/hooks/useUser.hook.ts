import { useCallback, useEffect } from 'react';

import { useGetUserLazyQuery } from '@graphql';
import useHistoryStore from '@/io/redux/history/useHistoryStore.hook';

const useUser = () => {
  const [getUserQuery, { loading, error, data }] = useGetUserLazyQuery();

  const { addRecord } = useHistoryStore();

  useEffect(() => {
    if (data?.user?.login) addRecord(data?.user.login);
  }, [data?.user]);

  const getUser = useCallback(
    (term: string) => {
      getUserQuery({ variables: { login: term } });
    },
    [getUserQuery]
  );

  return {
    user: data?.user,
    loading,
    error,

    getUser,
  };
};

export default useUser;
