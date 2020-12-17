import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

import { UserModel } from '@/models/User.model';
import {
  Paragraph,
  Title as AvatarAvatar,
} from '../typograph/Typograph.component';
import UserCardInfo from './UserCardInfo.component';
import useUserRepos from '@/io/user/useUserRepos.hook';
import UserCardRepos from './UserCardRepos.component';

const Wrapper = styled.div`
  background-color: ${({ theme }) =>
    theme.components.card.backgroundColorPrimary};

  padding: 20px;
  border: solid 1px ${({ theme }) => theme.border.color};
  border-radius: ${({ theme }) => theme.border.radius};

  width: 100%;
  max-width: 660px;
  margin: 0 auto;
`;

const Avatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;

  margin: 0 auto;
  border-radius: 50%;
  border: solid 1px ${({ theme }) => theme.border.color};
`;

const Title = styled(AvatarAvatar)`
  font-size: 24px;
  line-height: 32px;
  margin-top: 20px;
`;

const ReposWrapper = styled.div`
  margin-top: 20px;
`;

type UserCardProps = {
  user: UserModel;
};

const UserCard: FC<UserCardProps> = ({ user }) => {
  const { repos, getUserRepos, isLoading } = useUserRepos();

  useEffect(() => {
    getUserRepos(user.login);
  }, [user]);

  return (
    <Wrapper>
      <Avatar src={user.avatar_url} />

      <Title>{user.name}</Title>
      <Paragraph color="secondary">{user.login}</Paragraph>

      <UserCardInfo label="E-mail" text={user.email} />
      <UserCardInfo label="Bio" text={user.bio} />

      <ReposWrapper>
        <UserCardRepos repos={repos} isLoading={isLoading} />
      </ReposWrapper>
    </Wrapper>
  );
};

export default UserCard;
