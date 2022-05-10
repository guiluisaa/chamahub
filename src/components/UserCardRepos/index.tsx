import React, { FC } from 'react';

import * as S from './styles';

import RepoCard from '../RepoCard';
import { RepoNodeInfoFragment } from '@graphql';

type UserCardReposProps = {
  repos: RepoNodeInfoFragment[];
  isLoading?: boolean;
};

const UserCardRepos: FC<UserCardReposProps> = ({ repos, isLoading }) => (
  <S.Wrapper>
    {isLoading
      ? 'loading...'
      : repos.map(repo => (
          <S.RepoCardWrapper key={repo.id}>
            <RepoCard repo={repo} />
          </S.RepoCardWrapper>
        ))}
  </S.Wrapper>
);

export default UserCardRepos;
