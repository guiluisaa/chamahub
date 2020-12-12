import React, { FC } from 'react';
import styled from 'styled-components';

import useTheme from '@/io/redux/theme/useTheme.hook';
import Container from './Container.component';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.color.primary};
  padding-bottom: 30px;
`;

const Layout: FC = ({ children }) => {
  const { toggleTheme } = useTheme();

  return (
    <Wrapper>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Layout;
