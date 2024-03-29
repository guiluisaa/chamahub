import React, { FC, useEffect } from 'react';

import * as S from './styles';

import { UserBasicInfoFragment } from '@graphql';
import { Paragraph } from '@/components/Typograph';
import UserCardInfo from '../UserCardInfo';
import useUserRepos from '@/hooks/useUserRepos.hook';
import UserCardRepos from '../UserCardRepos';

type UserCardProps = {
  user: UserBasicInfoFragment;
};

const UserCard: FC<UserCardProps> = ({ user }) => {
  const { repos, getUserRepos, isLoading } = useUserRepos();

  useEffect(() => {
    getUserRepos(user.login);
  }, [user]);

  return (
    <S.Wrapper>
      <S.Avatar src={user.avatarUrl} />

      <S.Title>{user.name}</S.Title>
      <Paragraph color="secondary">{user.login}</Paragraph>

      <UserCardInfo label="E-mail" text={user.email} />
      <UserCardInfo label="Bio" text={user.bio} />

      {repos && (
        <S.ReposWrapper>
          <UserCardRepos repos={repos} isLoading={isLoading} />
        </S.ReposWrapper>
      )}
    </S.Wrapper>
  );
};

export default UserCard;
