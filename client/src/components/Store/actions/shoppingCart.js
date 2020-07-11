import axios from 'axios';

import { GET_PRODUCTS, ADD_TO_CART, GET_CART, ERROR } from './type';

// Get all products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// add to cart
export const addIntoCart = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/add-to-cart/${id}`);

    dispatch({
      type: ADD_TO_CART,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// get cart
export const getCart = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/shopping-cart');

    dispatch({
      type: GET_CART,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
