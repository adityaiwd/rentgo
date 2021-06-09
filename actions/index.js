/* eslint-disable dot-notation */
import rentgo from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import {useNavigation} from '@react-navigation/native';

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
  console.log(token);
  if (token) {
    await AsyncStorage.setItem('token', token);
    setAuthorizationToken(token);
    dispatch({
      type: 'LOGIN_USER',
      payload: token,
    });
  }
};

export const logoutUser = () => async dispatch => {
  await AsyncStorage.removeItem('token', err => console.log('token', err));
  setAuthorizationToken(false);
  dispatch({
    type: 'LOGOUT_USER',
  });
};
