import { connect } from 'react-redux';
import { actions } from '../../domains';
import { IProduct } from '../App/types';
import ShoppingCart from './ShoppingCart';

const mapStateToProps = (state: any) => ({
  items: state.user.shoppingCartItems,
});

const mapDispatchToProps = (dispatch: any) => ({
  onItemRemove: (item: IProduct) => dispatch(actions.removeShoppingCartItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
