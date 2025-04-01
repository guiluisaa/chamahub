import axios from 'axios';
import { User } from '@/@types/user';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUser = async (username: string) => {
  const response = await api.get<User>(`/users/${username}`);
  return response.data;
};

export default api;
