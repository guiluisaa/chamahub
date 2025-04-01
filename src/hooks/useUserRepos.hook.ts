import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Repository } from '@/@types/repository';

const useUserRepos = (username?: string) => {
  const { data, isLoading, error } = useQuery<Repository[]>({
    queryKey: ['userRepos', username],
    queryFn: async () => {
      if (!username) return null;
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
      );
      return response.json();
    },
    enabled: !!username,
  });

  const repos = useMemo(() => {
    return data || [];
  }, [data]);

  return {
    repos,
    isLoading,
    error,
  };
};

export default useUserRepos;
