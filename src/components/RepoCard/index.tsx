import React, { FC } from 'react';

import * as S from './styles';
import { Repository } from '@/@types/repository';

type RepoCardProps = {
  repo: Repository;
};

const RepoCard: FC<RepoCardProps> = ({ repo }) => (
  <S.Wrapper>
    <S.Link href={repo.html_url} target="_blank">
      <S.Name>{repo.name}</S.Name>
    </S.Link>

    <S.Description color="secondary">{repo.description}</S.Description>

    <S.Link href={repo.html_url} target="_blank">
      <S.Url>{repo.html_url}</S.Url>
    </S.Link>
  </S.Wrapper>
);

export default RepoCard;
