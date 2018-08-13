import { handleActions } from 'redux-actions';
import actions from './actions';
import userActions from '../user/actions';

const initialState = {
  items: undefined,
};

export default handleActions({

  [actions.FETCH_PRODUCTS]: (state: any, action: any) => {
    const products = action.payload;
    return {
      ...state,
      items: products,
    };
  },

  [userActions.ADD_SHOPPING_CART_ITEM]: (state: any, action: any) => {
    const productInCart = action.payload;
    const filteredItems = state.items.filter((item: any) => item.id !== productInCart.id);

    return {
      ...state,
      items: filteredItems,
    };
  },

  [userActions.REMOVE_SHOPPING_CART_ITEM]: (state: any, action: any) => {
    const itemToAdd  = action.payload;

    return {
      ...state,
      items: [].concat(...state.items, itemToAdd)
    };
  },

}, initialState);
