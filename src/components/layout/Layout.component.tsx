import Flexbox from '@/shared-styles/Flexbox.css';
import React, { FC } from 'react';
import styled from 'styled-components';

import Header from '../header/Header.component';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.color.primary};
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const Content = styled.div`
  padding-top: 70px;
  padding-bottom: 30px;

  min-height: 100vh;
  ${Flexbox}
`;

const Layout: FC = ({ children }) => (
  <Wrapper>
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>

    <Content>{children}</Content>
  </Wrapper>
);

export default Layout;
