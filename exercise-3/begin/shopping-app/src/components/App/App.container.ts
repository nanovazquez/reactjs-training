import { connect } from 'react-redux';
import { actions } from '../../domains';
import App from './App';

const mapStateToProps = (state: any) => ({
  shoppingCartItems: state.user.shoppingCartItems,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRemoveShoppingCartItem: (itemId: string) => dispatch(actions.removeShoppingCartItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
