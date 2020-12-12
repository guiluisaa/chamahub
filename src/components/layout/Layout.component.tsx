import React, { FC } from 'react';
import styled from 'styled-components';

import Container from './Container.component';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.color.primary};
  padding-bottom: 30px;
`;

const Layout: FC = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);

export default Layout;
