import { createAction } from 'redux-actions';

const ADD_SHOPPING_CART_ITEM = 'ADD_SHOPPING_CART_ITEM';
const REMOVE_SHOPPING_CART_ITEM = 'REMOVE_SHOPPING_CART_ITEM';

export default {
  ADD_SHOPPING_CART_ITEM,
  REMOVE_SHOPPING_CART_ITEM,
  addShoppingCartItem: createAction(ADD_SHOPPING_CART_ITEM),
  removeShoppingCartItem: createAction(REMOVE_SHOPPING_CART_ITEM),
};
