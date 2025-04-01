import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';

import * as S from './styles';

import Input from '../Input';

type SearchFormProps = {
  onSubmit: (term: string) => void;
  isLoading?: boolean;
  defaultTerm?: string;
};

const SearchForm: FC<SearchFormProps> = ({
  onSubmit,
  isLoading,
  defaultTerm,
}) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (defaultTerm) setTerm(defaultTerm);
  }, [defaultTerm]);

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
