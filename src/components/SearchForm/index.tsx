import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';

import * as S from './styles';

import Input from '../Input';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

type SearchFormProps = {
  onSubmit: (term: string) => void;
  isLoading?: boolean;
};

const SearchForm: FC<SearchFormProps> = ({ onSubmit, isLoading }) => {
  const [term, setTerm] = useState('');
  const { search } = useLocation();

  const { term: queryTerm } = useMemo(() => parse(search) as { term: string }, [
    search,
  ]);

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

      <RouterLink to="/history">
        <S.Link>Terms history</S.Link>
      </RouterLink>
    </S.Wrapper>
  );
};

export default SearchForm;
