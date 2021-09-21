import React, { FC, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { parse } from 'query-string';

import * as S from './styles';

import SearchForm from '@/components/SearchForm';
import useUser from '@/hooks/useUser.hook';
import UserCard from '@/components/UserCard';

const SearchView: FC = () => {
  const { user, getUser, loading, error } = useUser();
  const {
    replace,
    location: { search },
  } = useHistory();

  const { term: queryTerm } = useMemo(() => parse(search) as { term: string }, [
    search,
  ]);

  useEffect(() => {
    if (queryTerm) onSearch(queryTerm);
  }, []);

  useEffect(() => {
    if (user) replace(`/search?term=${user.login}`);
    if (error) replace(`/search`);
  }, [user, error]);

  const onSearch = (term: string) => getUser(term);

  return (
    <S.Wrapper>
      <SearchForm onSubmit={onSearch} isLoading={loading} />

      {error && <S.Alert type="error">{error.message}</S.Alert>}

      {user && <UserCard user={user} />}
    </S.Wrapper>
  );
};

export default SearchView;
