import React, { FC, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { parse } from 'query-string';

import SearchForm from '@/components/search-form/SearchForm.component';
import SharedContainer from '@/components/layout/Container.component';
import Flexbox from '@/shared-styles/Flexbox.css';
import useUser from '@/hooks/useUser.hook';
import UserCard from '@/components/user-card/UserCard.component';
import SharedAlert from '@/components/alert/Alert.component';
import useAbortSignal from '@/hooks/useAbortSignal.hook';

const Container = styled(SharedContainer)`
  width: 100%;
  ${Flexbox}
  flex-direction: column;
  justify-content: center;
`;

const Alert = styled(SharedAlert)`
  width: 100%;
  max-width: 335px;
  margin: 0 auto;

  text-align: center;
`;

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
    <Container>
      <SearchForm onSubmit={onSearch} isLoading={isLoading} />

      {error && <Alert type="error">{error}</Alert>}

      {user && <UserCard user={user} />}
    </Container>
  );
};

export default SearchView;
