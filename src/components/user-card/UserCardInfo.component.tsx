import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

import { Paragraph } from '../typograph/Typograph.component';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Label = styled.span`
  display: block;

  font-size: 10px;
  line-height: 20px;

  color: ${({ theme }) => theme.font.color.secondary};
`;

type UserCardInfoProps = {
  label: string;
  text: string | null;
};

const UserCardInfo: FC<UserCardInfoProps> = ({ label, text }) => {
  const isNull = useMemo(() => text === null, [text]);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Paragraph color={isNull ? 'secondary' : 'primary'}>
        {isNull ? 'This is a private data or does not exists' : text}
      </Paragraph>
    </Wrapper>
  );
};

export default UserCardInfo;
