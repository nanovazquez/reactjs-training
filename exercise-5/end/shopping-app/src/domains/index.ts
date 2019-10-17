import productsActions from './products/actions';
import productsReducers from './products/reducers';
import userActions from './user/actions';
import userReducers from './user/reducers';

const actions = {
  ...productsActions,
  ...userActions,
};

const reducers = {
  products: productsReducers,
  user: userReducers,
};

export {
  actions,
  reducers,
};
