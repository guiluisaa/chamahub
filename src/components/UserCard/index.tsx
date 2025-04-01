import React, { FC } from 'react';

import * as S from './styles';

import { Paragraph } from '@/components/Typograph';
import UserCardInfo from '../UserCardInfo';
import useUserRepos from '@/hooks/useUserRepos.hook';
import UserCardRepos from '../UserCardRepos';
import { User } from '@/@types/user';

type UserCardProps = {
  user: User;
};

const UserCard: FC<UserCardProps> = ({ user }) => {
  const { repos, isLoading } = useUserRepos();

  return (
    <S.Wrapper>
      <S.Avatar src={user.avatar_url} />

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
