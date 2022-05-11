import { useCallback, useMemo } from 'react';

import { useGetUserReposLazyQuery } from '@graphql';

const useUserRepos = () => {
  const [
    getUserReposQuery,
    { loading, error, data },
  ] = useGetUserReposLazyQuery();

  const edges = data?.user?.repositories.edges;

  const repos = useMemo(() => {
    return edges ? edges.map(edges => edges?.node!) : [];
  }, [data?.user?.repositories.edges]);

  const getUserRepos = useCallback(async (username: string) => {
    getUserReposQuery({ variables: { login: username } });
  }, []);

  return {
    repos,
    isLoading: loading,
    error,

    getUserRepos,
  };
};

export default useUserRepos;
