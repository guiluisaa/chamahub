import { AxiosError } from 'axios';

import api from '@/io/api';
import IService from '../IService';
import { RepoModel } from '@/models/Repo.model';

const getUserReposService: IService<string, RepoModel[]> = async (
  username,
  abortSignal
) => {
  try {
    const { data: repos } = await api.get<RepoModel[]>(
      `users/${username}/repos`,
      {
        params: { per_page: 4 },
        cancelToken: abortSignal,
      }
    );

    return repos;
  } catch (error) {
    throw error as AxiosError;
  }
};

export default getUserReposService;
