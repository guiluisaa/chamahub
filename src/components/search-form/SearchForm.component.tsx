import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import SharedButton from '../button/Button.component';

import Input from '../input/Input.component';
import { Title as SharedTitle } from '@/components/typograph/Typograph.component';
import { Link as RouterLink } from 'react-router-dom';

const Wrapper = styled.form`
  display: block;
  width: 100%;
  max-width: 335px;
  margin: -70px auto 40px;
`;

const Title = styled(SharedTitle)`
  text-align: center;
  margin-bottom: 40px;
`;

const Button = styled(SharedButton)`
  margin-top: 20px;
`;

const Link = styled(RouterLink)`
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme }) => theme.font.color.secondary};
  font-size: 14px;
  line-height: 20px;

  display: block;
  margin: 10px auto 0;
  width: max-content;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

type SearchFormProps = {
  onSubmit: (term: string) => void;
  isLoading?: boolean;
};

const SearchForm: FC<SearchFormProps> = ({ onSubmit, isLoading }) => {
  const [term, setTerm] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTerm(event.target.value);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <Wrapper onSubmit={submitForm}>
      <Title>Find an Github user</Title>

      <Input
        block
        placeholder="Type the username"
        value={term}
        onChange={onChange}
      />

      <Button block isLoading={isLoading} disabled={isLoading}>
        Search
      </Button>

      <Link to="/history">Terms history</Link>
    </Wrapper>
  );
};

export default SearchForm;
