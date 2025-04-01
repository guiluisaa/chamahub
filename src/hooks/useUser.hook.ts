import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import useHistory from '@/hooks/useHistory.hook';

const useUser = (term?: string) => {
  const { addRecord } = useHistory();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['user', term],
    queryFn: async () => {
      if (!term) return null;
      // Replace with actual API call
      const response = await fetch(`https://api.github.com/users/${term}`);
      return response.json();
    },
    enabled: !!term,
  });

  useEffect(() => {
    if (data?.login) {
      addRecord(data.login);
    }
  }, [data, addRecord]);

  return {
    user: data,
    loading: isLoading,
    error,
    refetch,
  };
};

export default useUser;
