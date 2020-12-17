export type TermHistory = {
  term: string;
  created_at: string;
};

export type HistoryState = {
  records: TermHistory[];
};

export const ADD_RECORD = 'ADD_RECORD';

type addRecord = {
  type: typeof ADD_RECORD;
  payload: TermHistory;
};

export type HistoryTypes = addRecord;
