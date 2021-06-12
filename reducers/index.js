import {combineReducers} from 'redux';
import authReducer from './authReducer';
import nameReducer from './nameReducer';
import searchReducer from './searchReducer';
import detailReducer from './detailReducer';
import latestReducer from './latestReducer';
import trendingReducer from './trendingReducer';
import cartReducer from './cartReducer';
import acceptedReducer from './acceptedReducer';
import onGoingReducer from './onGoingReducer';
import completedReducer from './completedReducer';
import imageSearchReducer from './imageSearchReducer';

export default combineReducers({
  auth: authReducer,
  name: nameReducer,
  search: searchReducer,
  detail: detailReducer,
  latest: latestReducer,
  trending: trendingReducer,
  cart: cartReducer,
  accepted: acceptedReducer,
  onGoing: onGoingReducer,
  completed: completedReducer,
  imageSearch: imageSearchReducer,
});
