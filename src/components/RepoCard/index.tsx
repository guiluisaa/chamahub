import React, { FC } from 'react';

import * as S from './styles';
import { RepoModel } from '@/models/Repo.model';

type RepoCardProps = {
  repo: RepoModel;
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
