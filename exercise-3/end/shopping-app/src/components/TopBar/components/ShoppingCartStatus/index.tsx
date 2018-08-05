import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { IProps } from './types';

class ShoppingCartStatus extends React.PureComponent<IProps, {}> {
  public render() {
    const { itemsInCart } = this.props;
    return (
      <Link className="shopping-cart-status" to="/shopping-cart">
        <span className="shopping-cart-status-logo">🛒</span>
        <span className="shopping-cart-status-amount">{ itemsInCart < 10 ? itemsInCart : '+9' }</span>
      </Link>
    );
  }
}

export default ShoppingCartStatus;
