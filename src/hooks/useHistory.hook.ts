import { useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { User } from '@/@types/user';

const useHistory = () => {
  const queryClient = useQueryClient();

  const { data: records = [], isLoading } = useQuery<User[]>({
    queryKey: ['terms'],
    queryFn: () => {
      const terms = localStorage.getItem('terms');
      return terms ? JSON.parse(terms) : [];
    },
  });

  const addRecord = useCallback(
    (term: string) => {
      const newTermsArray = [
        { term, createdAt: new Date().toISOString() },
        ...records,
      ];

      localStorage.setItem('terms', JSON.stringify(newTermsArray));
      queryClient.invalidateQueries({ queryKey: ['terms'] });
    },
    [records],
  );

  return {
    records,
    isLoading,
    addRecord,
  };
};

export default useHistory;
