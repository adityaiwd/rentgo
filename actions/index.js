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
    dispatch({
      type: 'SEARCH_PRODUCT',
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductDetail = productId => async dispatch => {
  try {
    const res = await rentgo.get(`/product/detail/${productId}`);
    dispatch({
      type: 'FETCH_DETAIL',
      payload: res.data.data,
    });
  } catch (error) {}
};

export const fetchLatestProduct = () => async dispatch => {
  try {
    const res = await rentgo.get('/product/latest');
    dispatch({
      type: 'FETCH_LATEST',
      payload: res.data.data,
    });
  } catch (error) {}
};

export const addToCart = data => async dispatch => {
  try {
    await rentgo.post(
      `/user/cart/create/${data.itemId}`,
      {
        quantity: data.itemAmount,
      },
      {
        headers: {Authorization: `Bearer ${data.token}`},
      },
    );
  } catch (error) {}
};

export const fetchCart = token => async dispatch => {
  try {
    const res = await rentgo.get('/user/cart', {
      headers: {Authorization: `Bearer ${token}`},
    });
    dispatch({
      type: 'FETCH_CART',
      payload: res.data.data,
    });
  } catch (error) {}
};

export const checkOut = data => async dispatch => {
  const {checkOutData, token} = data;
  try {
    const res = await rentgo.post('/user/checkout', checkOutData, {
      headers: {Authorization: `Bearer ${token}`},
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
