import { handleActions } from 'redux-actions';
import actions from './actions';

const initialState = {
  shoppingCartItems: [],
};

export default handleActions({
  [actions.ADD_SHOPPING_CART_ITEM]: (state: any, action: any) => {
    const newItem = action.payload;
    return {
      ...state,
      shoppingCartItems: [].concat(...state.shoppingCartItems, newItem)
    };
  },

  [actions.REMOVE_SHOPPING_CART_ITEM]: (state: any, action: any) => {
    const itemToRemove = action.payload;
    const filteredItems = state.shoppingCartItems.filter((item: any) => item.id !== itemToRemove.id);

    return {
      ...state,
      shoppingCartItems: filteredItems
    };
  },
}, initialState);
