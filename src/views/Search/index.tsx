import React, { FC, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from './styles';

import SearchForm from '@/components/SearchForm';
import useUser from '@/hooks/useUser.hook';
import UserCard from '@/components/UserCard';

const SearchView: FC = () => {
  const { user, getUser, loading, error } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParam = new URLSearchParams(location.search);
  const queryTerm = queryParam.get('term');

  useEffect(() => {
    if (queryTerm) onSearch(queryTerm);
  }, []);

  useEffect(() => {
    if (user) navigate(`/search?term=${user.login}`);
    if (error) navigate('/search');
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
