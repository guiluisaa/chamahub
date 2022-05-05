import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

import useTheme from '@/io/redux/theme/useTheme.hook';
import ThemeIcon from '../ThemeIcon';
import Logo from '../Logo';

const Header: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </S.LogoWrapper>

        <S.ThemeButton onClick={toggleTheme}>
          <ThemeIcon />
        </S.ThemeButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
