import styled from 'styled-components';

import { Title as AvatarAvatar } from '../Typograph';

export const Wrapper = styled.div`
  background-color: ${({ theme }) =>
    theme.components.card.backgroundColorPrimary};

  padding: 20px;
  border: solid 1px ${({ theme }) => theme.border.color};
  border-radius: ${({ theme }) => theme.border.radius};

  width: 100%;
  max-width: 660px;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;

  margin: 0 auto;
  border-radius: 50%;
  border: solid 1px ${({ theme }) => theme.border.color};
`;

export const Title = styled(AvatarAvatar)`
  font-size: 24px;
  line-height: 32px;
  margin-top: 20px;
`;

export const ReposWrapper = styled.div`
  margin-top: 20px;
`;
