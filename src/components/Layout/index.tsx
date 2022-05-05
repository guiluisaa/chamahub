import React, { FC } from 'react';

import * as S from './styles';

import Header from '../Header';

const Layout: FC = ({ children }) => (
  <S.Wrapper>
    <S.HeaderWrapper>
      <Header />
    </S.HeaderWrapper>

    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default Layout;
