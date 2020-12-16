import useTheme from '@/io/redux/theme/useTheme.hook';
import Flexbox from '@/shared-styles/Flexbox.css';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeIcon from '../icons/ThemeIcon.component';
import SharedContainer from '../layout/Container.component';
import Logo from '../logo/Logo.component';

const Wrapper = styled.header`
  padding: 20px;
  background-color: transparent;
`;

const Container = styled(SharedContainer)`
  ${Flexbox}
  justify-content: center;
  position: relative;
`;

const LogoWrapper = styled.div``;

const ThemeButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;

  cursor: pointer;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`;

const Header: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <Wrapper>
      <Container>
        <LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>

        <ThemeButton onClick={toggleTheme}>
          <ThemeIcon />
        </ThemeButton>
      </Container>
    </Wrapper>
  );
};

export default Header;
