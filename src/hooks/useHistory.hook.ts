import { useQuery } from '@tanstack/react-query';

const useHistory = () => {
  const { data: records = [], isLoading } = useQuery<string[]>({
    queryKey: ['terms'],
    queryFn: () => {
      const terms = localStorage.getItem('terms');
      return terms ? JSON.parse(terms) : [];
    },
  });

  return {
    records,
    isLoading,
  };
};

export default useHistory;
