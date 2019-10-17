import { connect } from 'react-redux';
import { actions } from '../../domains';
import App from './App';

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname,
  shoppingCartItems: state.user.shoppingCartItems,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchProducts: () => dispatch(actions.fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
