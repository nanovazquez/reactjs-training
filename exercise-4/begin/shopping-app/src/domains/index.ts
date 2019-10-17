import userActions from './user/actions';
import userReducers from './user/reducers';

const actions = {
  ...userActions,
};

const reducers = {
  user: userReducers,
};

export {
  actions,
  reducers,
};
