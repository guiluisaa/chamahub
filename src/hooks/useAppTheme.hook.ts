import { useQuery, useQueryClient } from '@tanstack/react-query';

const useAppTheme = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['theme'],
    queryFn: () => {
      return localStorage.getItem('theme') || 'light';
    },
  });

  const toggleTheme = () => {
    const newTheme = data === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    queryClient.invalidateQueries({ queryKey: ['theme'] });
  };

  return {
    theme: data,
    toggleTheme,
  };
};

export default useAppTheme;
