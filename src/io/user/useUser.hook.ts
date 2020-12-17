import { useCallback, useState } from 'react';

import api from '@/io/api';
import { UserModel } from '@/models/User.model';
import useHistory from '../redux/history/useHistory.hook';

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserModel | null>(null);
  const [error, setError] = useState('');
  const { addRecord } = useHistory();

  const getUser = useCallback(async (username: string) => {
    setError('');
    setIsLoading(true);

    try {
      const { data: user } = await api.get<UserModel>(`users/${username}`);

      addRecord(user.login);
      setUser(user);
    } catch (error) {
      setError(error.response.data.message);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    user,
    isLoading,
    error,

    getUser,
  };
};

export default useUser;
