import { useCallback, useState } from 'react';
import { CancelToken } from 'axios';

import { RepoModel } from '@/models/Repo.model';
import getUserReposService from '../io/services/user/getUserRepos.service';

const useUserRepos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState<RepoModel[]>([]);
  const [error, setError] = useState('');

  const getUserRepos = useCallback(
    async (username: string, abortSignal?: CancelToken) => {
      setError('');
      setIsLoading(true);
      try {
        const repos = await getUserReposService(username, abortSignal);
        setRepos(repos);
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    repos,
    isLoading,
    error,

    getUserRepos,
  };
};

export default useUserRepos;
