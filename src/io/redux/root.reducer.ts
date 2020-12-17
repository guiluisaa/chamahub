import { combineReducers } from 'redux';

import theme from './theme/theme.reducer';
import history from './history/history.reducer';

const rootReducer = combineReducers({
  theme,
  history,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
