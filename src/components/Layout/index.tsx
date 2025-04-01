import React, { FC } from 'react';

import * as S from './styles';

import Header from '../Header';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => (
  <S.Wrapper>
    <S.HeaderWrapper>
      <Header />
    </S.HeaderWrapper>

    <S.Content>
      <Outlet />
    </S.Content>
  </S.Wrapper>
);

export default Layout;
