import { combineReducers } from 'redux';
import { reducer as accounts } from './accounts';

const rootReducer = combineReducers({
  accounts,
  // ...other reducers
});

export default rootReducer;
