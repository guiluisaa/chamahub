import { useCallback, useEffect } from 'react';

import { useGetUserWithReposLazyQuery } from '@graphql';
import useHistory from '@/hooks/useHistory.hook';

const useUser = () => {
  const [getUserQuery, { loading, error, data }] =
    useGetUserWithReposLazyQuery();

  const { addRecord } = useHistory();

  useEffect(() => {
    if (data?.user?.login) addRecord(data?.user.login);
  }, [data?.user]);

  const getUser = useCallback(
    (term: string) => {
      getUserQuery({ variables: { login: term } });
    },
    [getUserQuery],
  );

  return {
    user: data?.user,
    loading,
    error,

    getUser,
  };
};

export default useUser;
