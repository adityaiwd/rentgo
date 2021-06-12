/* eslint-disable dot-notation */
import rentgo from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

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
      type: 'SET_PROFILE',
      payload: response.data.data,
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

export const fetchTrendingProduct = () => async dispatch => {
  try {
    const res = await rentgo.get('/product/trending');
    dispatch({
      type: 'FETCH_TRENDING',
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

export const fetchInvoiceAccepted = token => async dispatch => {
  try {
    const res = await rentgo.get('/user/invoice/accepted', {
      headers: {Authorization: `Bearer ${token}`},
    });
    dispatch({
      type: 'FETCH_INVOICE_ACCEPTED',
      payload: res.data.data,
    });
  } catch (error) {}
};

export const fetchInvoiceOnGoing = token => async dispatch => {
  try {
    const res = await rentgo.get('/user/invoice/on_going', {
      headers: {Authorization: `Bearer ${token}`},
    });
    dispatch({
      type: 'FETCH_INVOICE_ON_GOING',
      payload: res.data.data,
    });
  } catch (error) {}
};

export const fetchInvoiceCompleted = token => async dispatch => {
  try {
    const res = await rentgo.get('/user/invoice/completed', {
      headers: {Authorization: `Bearer ${token}`},
    });
    dispatch({
      type: 'FETCH_INVOICE_COMPLETED',
      payload: res.data.data,
    });
  } catch (error) {}
};

export const sendReview = data => async dispatch => {
  try {
    const res = await rentgo.put(`/user/review/create/${data.id}`, data.body, {
      headers: {Authorization: `Bearer ${data.token}`},
    });
    Toast.show({
      text1: 'Review Sent',
      text2: 'Item successfully reviewed',
    });
  } catch (error) {}
};

export const imageSearchQuery = image => async dispatch => {
  try {
    const res = await axios.post('http://34.101.161.26:8000/predict', image, {
      headers: {'Content-Type': 'multipart/form-data'},
    });
    dispatch({
      type: 'IMAGE_SEARCH',
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendVerifyRequest = data => async dispatch => {
  console.log(JSON.stringify(data));
  try {
    const res = await rentgo.put('/user/profile/verification', data.body, {
      headers: {Authorization: `Bearer ${data.token}`},
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
