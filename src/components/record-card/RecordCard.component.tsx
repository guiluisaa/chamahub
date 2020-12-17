import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.blue};
  background-color: ${({ theme }) =>
    theme.theme === 'light'
      ? theme.components.card.backgroundColorSecondary
      : theme.components.card.backgroundColorPrimary};
  padding: 8px 10px;

  border: solid 1px ${({ theme }) => theme.border.color};
  border-radius: ${({ theme }) => theme.border.radius};
`;

const WrapperLink = styled.a`
  color: ${({ theme }) => theme.color.blue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

type RecordCardProps = {
  term: string;
};

const RecordCard: FC<RecordCardProps> = ({ term }) => (
  <Link to={`/search?term=${term}`}>
    <WrapperLink>
      <Wrapper>{term}</Wrapper>
    </WrapperLink>
  </Link>
);

export default RecordCard;
