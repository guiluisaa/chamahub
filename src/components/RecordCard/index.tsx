import React, { FC } from 'react';

import * as S from './styles';

type RecordCardProps = {
  term: string;
};

const RecordCard: FC<RecordCardProps> = ({ term }) => (
  <S.Link to={`/search?term=${term}`}>
    <S.Wrapper>{term}</S.Wrapper>
  </S.Link>
);

export default RecordCard;
