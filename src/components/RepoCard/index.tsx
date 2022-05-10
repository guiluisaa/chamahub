import React, { FC } from 'react';

import * as S from './styles';
import { RepoNodeInfoFragment } from '@graphql';

type RepoCardProps = {
  repo: RepoNodeInfoFragment;
};

const RepoCard: FC<RepoCardProps> = ({ repo }) => (
  <S.Wrapper>
    <S.Link href={repo.url} target="_blank">
      <S.Name>{repo.name}</S.Name>
    </S.Link>

    <S.Description color="secondary">{repo.description}</S.Description>

    <S.Link href={repo.url} target="_blank">
      <S.Url>{repo.url}</S.Url>
    </S.Link>
  </S.Wrapper>
);

export default RepoCard;
