import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from './styles';

import SearchForm from '@/components/SearchForm';
import useUser from '@/hooks/useUser.hook';
import UserCard from '@/components/UserCard';

const SearchView: FC = () => {
  const [term, setTerm] = useState<string | null>(null);

  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);

  const queryTerm = queryParam.get('term');

  const { user, loading, error, refetch } = useUser(
    term ?? queryTerm ?? undefined,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (term) refetch();
  }, [term]);

  useEffect(() => {
    if (user) navigate(`/search?term=${user.login}`);
    if (error) navigate('/search');
  }, [user, error]);

  const onSearch = (term: string) => setTerm(term);

  return (
    <S.Wrapper>
      <SearchForm
        defaultTerm={queryTerm ?? undefined}
        onSubmit={onSearch}
        isLoading={loading}
      />

      {error && <S.Alert type="error">{error.message}</S.Alert>}

      {user && <UserCard user={user} />}
    </S.Wrapper>
  );
};

export default SearchView;
