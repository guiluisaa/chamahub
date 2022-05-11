import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.color.primary};
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;

  padding-top: 70px;
  padding-bottom: 30px;

  min-height: 100vh;
`;
