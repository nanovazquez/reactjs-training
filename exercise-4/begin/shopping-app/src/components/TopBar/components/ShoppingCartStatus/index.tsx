import * as React from 'react';
import './styles.css';
import { IProps } from './types';

class ShoppingCartStatus extends React.PureComponent<IProps, {}> {
  public render() {
    const { itemsInCart } = this.props;
    return (
      <div className="shopping-cart-status">
        <span className="shopping-cart-status-logo">🛒</span>
        <span className="shopping-cart-status-amount">{ itemsInCart < 10 ? itemsInCart : '+9' }</span>
      </div>
    );
  }
}

export default ShoppingCartStatus;
