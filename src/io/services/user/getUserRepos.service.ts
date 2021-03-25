import { AxiosError } from 'axios';

import api from '@/io/api';
import { RepoModel } from '@/models/Repo.model';

const getUserReposService = async (username: string) => {
  try {
    const { data: repos } = await api.get<RepoModel[]>(
      `users/${username}/repos`,
      { params: { per_page: 4 } }
    );

    return repos;
  } catch (error) {
    throw error as AxiosError;
  }
};

export default getUserReposService;
