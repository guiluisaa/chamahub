import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import SearchForm from '@/components/search-form/SearchForm.component';
import SharedContainer from '@/components/layout/Container.component';
import Flexbox from '@/shared-styles/Flexbox.css';
import useUser from '@/io/user/useUser.hook';
import UserCard from '@/components/user-card/UserCard.component';

const Container = styled(SharedContainer)`
  width: 100%;
  ${Flexbox}
  flex-direction: column;
  justify-content: center;
`;

const SearchView: FC = () => {
  const { user, getUser, isLoading } = useUser();
  const { replace } = useHistory();

  useEffect(() => {
    console.log(user);
    if (user) replace(`/search?term=${user.login}`);
  }, [user]);

  const onSearch = (term: string) => getUser(term);

  return (
    <Container>
      <SearchForm onSubmit={onSearch} isLoading={isLoading} />
      <br />
      {user && <UserCard user={user} />}
    </Container>
  );
};

export default SearchView;
