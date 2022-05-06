import React, { FC, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { parse } from 'query-string';

import * as S from './styles';

import SearchForm from '@/components/SearchForm';
import useUser from '@/hooks/useUser.hook';
import UserCard from '@/components/UserCard';
import useAbortSignal from '@/hooks/useAbortSignal.hook';

const SearchView: FC = () => {
  const { user, getUser, isLoading, error } = useUser();
  const {
    replace,
    location: { search },
  } = useHistory();
  const { token: abortToken, cancel } = useAbortSignal();

  const { term: queryTerm } = useMemo(() => parse(search) as { term: string }, [
    search,
  ]);

  useEffect(() => {
    if (queryTerm) onSearch(queryTerm);

    return () => {
      cancel('get user api is being canceled.');
    };
  }, []);

  useEffect(() => {
    if (user) replace(`/search?term=${user.login}`);
    if (error) replace(`/search`);
  }, [user, error]);

  const onSearch = (term: string) => getUser(term, abortToken);

  return (
    <S.Wrapper>
      <SearchForm onSubmit={onSearch} isLoading={isLoading} />

      {error && <S.Alert type="error">{error}</S.Alert>}

      {user && <UserCard user={user} />}
    </S.Wrapper>
  );
};

export default SearchView;
