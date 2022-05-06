import styled from 'styled-components';

import Flexbox from '@/shared-styles/Flexbox.css';
import SharedContainer from '../Container';

export const Wrapper = styled.header`
  padding: 20px;
  background-color: transparent;
`;

export const Container = styled(SharedContainer)`
  ${Flexbox}
  justify-content: center;
  position: relative;
`;

export const LogoWrapper = styled.div``;

export const ThemeButton = styled.button`
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
