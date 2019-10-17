import { handleActions } from 'redux-actions';
import actions from './actions';

const initialState = {
  allItems: [],
  shoppingCartItems: [],
  userId: 'user-id',
};

export default handleActions({
  [actions.ADD_SHOPPING_CART_ITEM]: (state: any, action: any) => {
    const newItem = action.payload;
    return {
      ...state,
      shoppingCartItems: [].concat(...state.shoppingCartItems, newItem)
    };
  },

  [actions.FETCH_ALL_ITEMS]: (state: any, action: any) => {
    const items = action.payload;
    return {
      ...state,
      allItems: items,
    };
  },

  [actions.FETCH_SHOPPING_CART_ITEMS]: (state: any, action: any) => {
    const items = action.payload;
    return {
      ...state,
      shoppingCartItems: items,
    };
  },

  [actions.REMOVE_SHOPPING_CART_ITEM]: (state: any, action: any) => {
    const itemToRemoveId = action.payload as string;
    const filteredItems = state.shoppingCartItems.filter((item: any) => item.id !== itemToRemoveId)

    return {
      ...state,
      shoppingCartItems: filteredItems
    };
  },
}, initialState);
