import React, { FC, useMemo } from 'react';

import * as S from './styles';

import { Paragraph } from '../Typograph';

type UserCardInfoProps = {
  label: string;
  text?: string | null;
};

const UserCardInfo: FC<UserCardInfoProps> = ({ label, text }) => {
  const isNull = useMemo(() => text === '' || text === null, [text]);

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <Paragraph color={isNull ? 'secondary' : 'primary'}>
        {isNull ? 'This is a private data or does not exists' : text}
      </Paragraph>
    </S.Wrapper>
  );
};

export default UserCardInfo;
