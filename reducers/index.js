import {combineReducers} from 'redux';
import authReducer from './authReducer';
import nameReducer from './nameReducer';
import searchReducer from './searchReducer';
import detailReducer from './detailReducer';
import latestReducer from './latestReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  auth: authReducer,
  name: nameReducer,
  search: searchReducer,
  detail: detailReducer,
  latest: latestReducer,
  cart: cartReducer,
});
