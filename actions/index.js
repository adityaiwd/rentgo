/* eslint-disable dot-notation */
import rentgo from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const setAuthorizationToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const loginRequest = loginData => async dispatch => {
  const response = await rentgo.post('/auth/sign_in', loginData);
  const token = response.data.data;
  await AsyncStorage.setItem('token', token);
  setAuthorizationToken(token);
  console.log(token);
  dispatch({
    type: 'LOGIN_USER',
    payload: token,
  });
};

export const logoutUser = () => async dispatch => {
  console.log('logout');
  //   await AsyncStorage.removeItem('token', err => console.log('token', err));
  //   setAuthorizationToken(false);
  //   dispatch({
  //     type: 'LOGOUT_USER',
  //   });
};
