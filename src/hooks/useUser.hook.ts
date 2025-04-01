import { useQuery } from '@tanstack/react-query';

import { getUser } from '@/io/api';

const useUser = (term?: string) => {
  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery({
    enabled: !!term,
    queryKey: ['user', term],
    queryFn: () => {
      const terms = localStorage.getItem('terms');

      const termsArray = terms ? JSON.parse(terms) : [];

      if (!terms) {
        localStorage.setItem('terms', JSON.stringify([term]));
      } else {
        localStorage.setItem('terms', JSON.stringify([term, ...termsArray]));
      }

      return getUser(term ?? '');
    },
  });

  return {
    user,
    loading: isLoading,
    error,
    refetch,
  };
};

export default useUser;
