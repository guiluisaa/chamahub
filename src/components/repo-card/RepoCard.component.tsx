import React, { FC } from 'react';
import styled from 'styled-components';

import { RepoModel } from '@/models/Repo.model';
import { Paragraph } from '../typograph/Typograph.component';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.components.card.backgroundColorSecondary};

  padding: 10px;
  border: solid 1px ${({ theme }) => theme.border.color};
  border-radius: ${({ theme }) => theme.border.radius};
`;

const Name = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const Description = styled(Paragraph)`
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
`;

const Url = styled(Description)`
  margin-top: 20px;
  word-wrap: break-word;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.blue};

  &:hover {
    text-decoration: underline;
  }

  ${Name}, ${Url} {
    color: ${({ theme }) => theme.color.blue};
  }
`;

type RepoCardProps = {
  repo: RepoModel;
};

const RepoCard: FC<RepoCardProps> = ({ repo }) => (
  <Wrapper>
    <Link href={repo.html_url} target="_blank">
      <Name>{repo.name}</Name>
    </Link>

    <Description color="secondary">{repo.description}</Description>

    <Link href={repo.html_url} target="_blank">
      <Url>{repo.html_url}</Url>
    </Link>
  </Wrapper>
);

export default RepoCard;
