import { AxiosError } from 'axios';

import api from '../../api';
import { UserModel } from '@/models/User.model';

const getUserService = async (username: string) => {
  try {
    const { data: user } = await api.get<UserModel>(`users/${username}`);
    return user;
  } catch (error) {
    throw error as AxiosError;
  }
};

export default getUserService;
