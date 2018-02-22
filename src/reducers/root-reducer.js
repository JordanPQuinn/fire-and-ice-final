import { combineReducers } from 'redux';
import { housesReducer } from './houses-reducer';

const rootReducer = combineReducers({
  houses: housesReducer
});


export default rootReducer;
