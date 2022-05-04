import styled from 'styled-components';

import { Paragraph } from '../typograph/Typograph.component';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.components.card.backgroundColorSecondary};

  padding: 10px;
  border: solid 1px ${({ theme }) => theme.border.color};
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const Name = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Description = styled(Paragraph)`
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
`;

export const Url = styled(Description)`
  margin-top: 20px;
  word-wrap: break-word;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.blue};

  &:hover {
    text-decoration: underline;
  }

  ${Name}, ${Url} {
    color: ${({ theme }) => theme.color.blue};
  }
`;
