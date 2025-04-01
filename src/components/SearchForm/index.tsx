import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';

import * as S from './styles';

import Input from '../Input';
import { useLocation } from 'react-router-dom';

type SearchFormProps = {
  onSubmit: (term: string) => void;
  isLoading?: boolean;
};

const SearchForm: FC<SearchFormProps> = ({ onSubmit, isLoading }) => {
  const [term, setTerm] = useState('');
  const { search } = useLocation();

  const queryParam = new URLSearchParams(search);
  const queryTerm = queryParam.get('term');

  useEffect(() => {
    if (queryTerm) setTerm(queryTerm);
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTerm(event.target.value);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <S.Wrapper onSubmit={submitForm}>
      <S.Title>Find an Github user</S.Title>

      <Input
        block
        placeholder="Type the username"
        value={term}
        onChange={onChange}
      />

      <S.Button block isLoading={isLoading} disabled={isLoading}>
        Search
      </S.Button>

      <S.Link to="/history">Terms history</S.Link>
    </S.Wrapper>
  );
};

export default SearchForm;
