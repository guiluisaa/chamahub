import { Dispatch, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../root.reducer';
import { ADD_RECORD, HistoryState, HistoryTypes } from './history.types';

const useHistory = () => {
  const { records } = useSelector<AppState, HistoryState>(
    ({ history }) => history
  );

  const dispatch = useDispatch<Dispatch<HistoryTypes>>();

  const sortedRecords = useMemo(
    () =>
      records.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      ),
    [records]
  );

  const addRecord = useCallback((term: string) => {
    dispatch({
      type: ADD_RECORD,
      payload: { term, created_at: new Date().toISOString() },
    });
  }, []);

  return {
    records: sortedRecords,

    addRecord,
  };
};

export default useHistory;
