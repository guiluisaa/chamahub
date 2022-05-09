import { combineReducers } from 'redux';

import history from './history/history.reducer';

const rootReducer = combineReducers({
  history,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
