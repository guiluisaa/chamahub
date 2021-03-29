import { Dispatch, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../root.reducer';
import { ADD_RECORD, HistoryState, HistoryTypes } from './history.types';

const useHistoryStore = () => {
  const { records } = useSelector<AppState, HistoryState>(
    ({ history }) => history
  );

  const dispatch = useDispatch<Dispatch<HistoryTypes>>();

  const addRecord = useCallback((term: string) => {
    dispatch({
      type: ADD_RECORD,
      payload: { term, created_at: new Date().toISOString() },
    });
  }, []);

  return {
    records,

    addRecord,
  };
};

export default useHistoryStore;
