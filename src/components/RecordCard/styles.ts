import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.blue};
  background-color: ${({ theme }) =>
    theme.theme === 'light'
      ? theme.components.card.backgroundColorSecondary
      : theme.components.card.backgroundColorPrimary};
  padding: 8px 10px;

  border: solid 1px ${({ theme }) => theme.border.color};
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const LinkWrapper = styled.a`
  color: ${({ theme }) => theme.color.blue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
