import { GET_PRODUCTS, ADD_TO_CART, GET_CART, ERROR } from '../actions/type';

const initialState = {
  products: [],
  addToCart: [],
  cart: [],
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: payload,
      };
    case GET_CART:
      return {
        ...state,
        cart: payload,
      };
    case ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
