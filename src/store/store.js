import { createStore, combineReducers } from 'redux';

export const langReducer = () => {};
export const rootReducer = combineReducers({
  langReducer,
});
export default createStore(rootReducer);
