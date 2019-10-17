import { createAction } from 'redux-actions';
import productsService from '../../services/products-service';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export default {
  FETCH_PRODUCTS,
  fetchProducts: createAction(FETCH_PRODUCTS, productsService.getAll),
};
