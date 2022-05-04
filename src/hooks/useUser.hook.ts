import { useCallback, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import { UserModel } from '@/models/User.model';
import useHistoryStore from '@/io/redux/history/useHistoryStore.hook';

const GET_USER = gql`
  query User($login: String!) {
    user(login: $login) {
      id
      avatarUrl
      name
      login
      email
      bio
    }
  }
`;

const useUser = () => {
  const [getUserQuery, { loading, error, data }] = useLazyQuery<{
    user: UserModel;
  }>(GET_USER);

  const { addRecord } = useHistoryStore();

  useEffect(() => {
    if (data?.user?.login) addRecord(data?.user.login);
  }, [data?.user]);

  const getUser = useCallback(
    async (term: string) => {
      const { data: resData } = await getUserQuery({
        variables: { login: term },
      });

      console.log(resData);
    },
    [getUserQuery]
  );

  return {
    user: data?.user,
    loading,
    error,

    getUser,
  };
};

export default useUser;
