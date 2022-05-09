import { useApolloClient } from '@apollo/client';

import { ThemeEnum, useGetThemeQuery } from '@graphql';
import themeVar from '@/io/graphql/local-vars/themeVar';

const useAppTheme = () => {
  const client = useApolloClient();
  const { data } = useGetThemeQuery();

  const theme = data?.theme;

  const toggleTheme = async () => {
    if (theme) {
      client.cache.evict({ fieldName: 'theme' });
      client.cache.gc();

      const newTheme =
        theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light;

      localStorage.setItem('theme', newTheme);
      themeVar(newTheme);
    }
  };

  return {
    theme: theme ?? ThemeEnum.Light,
    toggleTheme,
  };
};

export default useAppTheme;
