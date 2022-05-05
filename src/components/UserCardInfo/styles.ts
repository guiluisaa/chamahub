import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const Label = styled.span`
  display: block;

  font-size: 10px;
  line-height: 20px;

  color: ${({ theme }) => theme.font.color.secondary};
`;
