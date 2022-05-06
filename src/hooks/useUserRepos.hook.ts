import { useCallback, useState } from 'react';
import { AxiosError, CancelToken } from 'axios';

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
        const axiosError = error as AxiosError;
        setError(axiosError?.response?.data.message);
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
