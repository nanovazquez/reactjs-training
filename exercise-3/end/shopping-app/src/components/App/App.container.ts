import { connect } from 'react-redux';
import { actions } from '../../domains';
import App from './App';

const mapStateToProps = (state: any) => ({
  shoppingCartItems: state.user.shoppingCartItems,
  userId: state.user.userId,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUserShoppingCartItems: (userId: string) => dispatch(actions.fetchShoppingCartItems(userId)),
  onRemoveShoppingCartItem: (itemId: string) => dispatch(actions.removeShoppingCartItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
