import { useMemo } from 'react';

import useHistory from '@/io/redux/history/useHistoryStore.hook';

const useRecords = () => {
  const { records } = useHistory();

  const sortedRecords = useMemo(
    () =>
      records.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      ),
    [records]
  );

  return {
    records,
    sortedRecords,
  };
};

export default useRecords;
