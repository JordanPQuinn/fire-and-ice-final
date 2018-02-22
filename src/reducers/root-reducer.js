import { combineReducers } from 'redux';
import { housesReducer } from './houses-reducer';
import { membersReducer } from './members-reducer';

export const rootReducer = combineReducers({
  houses: housesReducer,
  members: membersReducer
});


export default rootReducer;
