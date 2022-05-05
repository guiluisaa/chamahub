import React, { FC } from 'react';

import * as S from './styles';

import { RepoModel } from '@/models/Repo.model';
import RepoCard from '../RepoCard';

type UserCardReposProps = {
  repos: RepoModel[];
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
