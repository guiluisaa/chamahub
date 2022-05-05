import styled from 'styled-components';

import SharedButton from '@/components/Button';
import { Title as SharedTitle } from '@/components/Typograph';

export const Wrapper = styled.form`
  display: block;
  width: 100%;
  max-width: 335px;
  margin: 40px auto;
`;

export const Title = styled(SharedTitle)`
  text-align: center;
  margin-bottom: 40px;
`;

export const Button = styled(SharedButton)`
  margin-top: 20px;
`;

export const Link = styled.a`
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
