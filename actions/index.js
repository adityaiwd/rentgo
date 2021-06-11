/* eslint-disable dot-notation */
import rentgo from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import {useNavigation} from '@react-navigation/native';

export const setAuthorizationToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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

export const fetchUserName = token => async dispatch => {
  try {
    const response = await rentgo.get('/user/profile', {
      headers: {Authorization: `Bearer ${token}`},
    });
    dispatch({
      type: 'SET_NAME',
      payload: response.data.data.name,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = () => async dispatch => {
  await AsyncStorage.removeItem('token', err => console.log('token', err));
  setAuthorizationToken(false);
  dispatch({
    type: 'LOGOUT_USER',
  });
};

export const searchProduct = query => async dispatch => {
  try {
    const response = await rentgo.get('/product', {
      params: {name: query},
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
