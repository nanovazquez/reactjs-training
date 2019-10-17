import { createAction } from 'redux-actions';
import usersService from '../../services/users-service';

const FETCH_SHOPPING_CART_ITEMS = 'FETCH_SHOPPING_CART_ITEMS';
const REMOVE_SHOPPING_CART_ITEM = 'REMOVE_SHOPPING_CART_ITEM';
const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS';
const ADD_SHOPPING_CART_ITEM = 'ADD_SHOPPING_CART_ITEM';

const fetchShoppingCartItems = createAction(FETCH_SHOPPING_CART_ITEMS, usersService.getUserShoppingCartItems);
const removeShoppingCartItem = createAction(REMOVE_SHOPPING_CART_ITEM);
const fetchAllItems = createAction(FETCH_ALL_ITEMS);
const addShoppingCartItem = createAction(ADD_SHOPPING_CART_ITEM);

export default {
  FETCH_SHOPPING_CART_ITEMS,
  REMOVE_SHOPPING_CART_ITEM,
  FETCH_ALL_ITEMS,
  ADD_SHOPPING_CART_ITEM,
  fetchShoppingCartItems,
  removeShoppingCartItem,
  fetchAllItems,
  addShoppingCartItem
};
