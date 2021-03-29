import { AxiosError } from 'axios';

import api from '../../api';
import IService from '../IService';
import { UserModel } from '@/models/User.model';

const getUserService: IService<string, UserModel> = async (
  username,
  abortSignal
) => {
  try {
    const { data: user } = await api.get<UserModel>(`users/${username}`, {
      cancelToken: abortSignal,
    });
    return user;
  } catch (error) {
    throw error as AxiosError;
  }
};

export default getUserService;
