import React, { FC } from 'react';
import styled from 'styled-components';

import { RepoModel } from '@/models/Repo.model';
import RepoCard from '../repo-card/RepoCard.component';
import Flexbox from '@/shared-styles/Flexbox.css';

const Wrapper = styled.div`
  margin: 0 -10px;

  @media (min-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    ${Flexbox}
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const RepoCardWrapper = styled.div`
  width: 100%;
  padding: 10px;

  @media (min-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    display: flex;
    width: 50%;
  }
`;

type UserCardReposProps = {
  repos: RepoModel[];
  isLoading?: boolean;
};

const UserCardRepos: FC<UserCardReposProps> = ({ repos, isLoading }) => (
  <Wrapper>
    {isLoading
      ? 'loading...'
      : repos.map(repo => (
          <RepoCardWrapper key={repo.id}>
            <RepoCard repo={repo} />
          </RepoCardWrapper>
        ))}
  </Wrapper>
);

export default UserCardRepos;
