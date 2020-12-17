import { ADD_RECORD, HistoryState, HistoryTypes } from './history.types';

const initialState: HistoryState = {
  records: [],
};

const userReducer = (state = initialState, action: HistoryTypes) => {
  switch (action.type) {
    case ADD_RECORD:
      return {
        ...state,
        records: [action.payload, ...state.records],
      };
    default:
      return state;
  }
};

export default userReducer;
