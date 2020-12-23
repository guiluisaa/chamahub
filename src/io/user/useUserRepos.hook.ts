import { useCallback, useState } from 'react';

import api from '@/io/api';
import { RepoModel } from '@/models/Repo.model';
import axios from 'axios';

const useUserRepos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState<RepoModel[]>([]);
  const [error, setError] = useState('');

  const signal = axios.CancelToken.source();

  const getUserRepos = useCallback(async (username: string) => {
    setError('');
    setIsLoading(true);
    try {
      const { data: repos } = await api.get<RepoModel[]>(
        `users/${username}/repos`,
        {
          params: {
            per_page: 4,
          },
          cancelToken: signal.token,
        }
      );

      setRepos(repos);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    repos,
    isLoading,
    error,
    signal,

    getUserRepos,
  };
};

export default useUserRepos;
