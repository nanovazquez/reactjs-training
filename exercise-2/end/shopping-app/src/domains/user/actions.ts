import { createAction } from 'redux-actions';
import usersService from '../../services/users-service';

const FETCH_SHOPPING_CART_ITEMS = 'FETCH_SHOPPING_CART_ITEMS';
const REMOVE_SHOPPING_CART_ITEM = 'REMOVE_SHOPPING_CART_ITEM';

export default {
  FETCH_SHOPPING_CART_ITEMS,
  REMOVE_SHOPPING_CART_ITEM,
  fetchShoppingCartItems: createAction(FETCH_SHOPPING_CART_ITEMS, usersService.getUserShoppingCartItems),
  removeShoppingCartItem: createAction(REMOVE_SHOPPING_CART_ITEM),
};
