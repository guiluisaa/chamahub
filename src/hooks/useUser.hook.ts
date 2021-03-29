import { useCallback, useState } from 'react';
import { CancelToken } from 'axios';

import { UserModel } from '@/models/User.model';
import useHistoryStore from '@/io/redux/history/useHistoryStore.hook';
import getUserService from '@/io/services/user/getUser.service';

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserModel | null>(null);
  const [error, setError] = useState('');
  const { addRecord } = useHistoryStore();

  const getUser = useCallback(
    async (username: string, abortSignal?: CancelToken) => {
      setError('');
      setIsLoading(true);

      try {
        const user = await getUserService(username, abortSignal);

        addRecord(user.login);
        setUser(user);
      } catch (error) {
        setError(error.response.data.message);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    user,
    isLoading,
    error,

    getUser,
  };
};

export default useUser;
