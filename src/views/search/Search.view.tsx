import React, { FC } from 'react';
import styled from 'styled-components';

import SearchForm from '@/components/search-form/SearchForm.component';
import SharedContainer from '@/components/layout/Container.component';
import Flexbox from '@/shared-styles/Flexbox.css';

const Container = styled(SharedContainer)`
  width: 100%;
  ${Flexbox}
  flex-direction: column;
  justify-content: center;
`;

const SearchView: FC = () => {
  return (
    <Container>
      <SearchForm onSubmit={term => console.log(term)} />
    </Container>
  );
};

export default SearchView;
