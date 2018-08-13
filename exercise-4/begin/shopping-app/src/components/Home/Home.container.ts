import { connect } from 'react-redux';
import { actions } from '../../domains';
import { IProduct } from '../App/types';
import Home from './Home';

const mapStateToProps = (state: any) => ({
  products: state.products.items,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchProducts: () => dispatch(actions.fetchProducts()),
  addProductToCart: (item: IProduct) => dispatch(actions.addShoppingCartItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
