import styled from 'styled-components';

import Flexbox from '@/shared-styles/Flexbox.css';

export const Wrapper = styled.div`
  margin: 0 -10px;

  @media (min-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    ${Flexbox}
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const RepoCardWrapper = styled.div`
  width: 100%;
  padding: 10px;

  @media (min-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    display: flex;
    width: 50%;
  }
`;
