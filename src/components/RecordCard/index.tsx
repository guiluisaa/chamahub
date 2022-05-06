import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

type RecordCardProps = {
  term: string;
};

const RecordCard: FC<RecordCardProps> = ({ term }) => (
  <Link to={`/search?term=${term}`}>
    <S.LinkWrapper>
      <S.Wrapper>{term}</S.Wrapper>
    </S.LinkWrapper>
  </Link>
);

export default RecordCard;
