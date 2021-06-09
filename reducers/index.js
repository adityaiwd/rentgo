import {combineReducers} from 'redux';
import authReducer from './authReducer';
import nameReducer from './nameReducer';

export default combineReducers({
  auth: authReducer,
  name: nameReducer,
});
