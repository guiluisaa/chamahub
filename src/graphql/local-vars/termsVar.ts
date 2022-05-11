import { makeVar } from '@apollo/client';
import { TermHistory } from '@graphql';

const currentTerms = localStorage.getItem('terms');
const terms = currentTerms ? JSON.parse(currentTerms) : [];

const termsVar = makeVar<TermHistory[]>(terms);

export default termsVar;
