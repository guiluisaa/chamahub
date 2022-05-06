import React, { FC, useEffect } from 'react';

import * as S from './styles';

import { UserModel } from '@/models/User.model';
import { Paragraph } from '@/components/Typograph';
import UserCardInfo from '../UserCardInfo';
import useUserRepos from '@/hooks/useUserRepos.hook';
import UserCardRepos from '../UserCardRepos';
import useAbortSignal from '@/hooks/useAbortSignal.hook';

type UserCardProps = {
  user: UserModel;
};

const UserCard: FC<UserCardProps> = ({ user }) => {
  const { repos, getUserRepos, isLoading } = useUserRepos();
  const { token: abortToken, cancel } = useAbortSignal();

  useEffect(() => {
    getUserRepos(user.login, abortToken);
  }, [user]);

  useEffect(() => {
    return () => {
      cancel('get repos api is being canceled.');
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Avatar src={user.avatarUrl} />

      <S.Title>{user.name}</S.Title>
      <Paragraph color="secondary">{user.login}</Paragraph>

      <UserCardInfo label="E-mail" text={user.email} />
      <UserCardInfo label="Bio" text={user.bio} />

      <S.ReposWrapper>
        <UserCardRepos repos={repos} isLoading={isLoading} />
      </S.ReposWrapper>
    </S.Wrapper>
  );
};

export default UserCard;
