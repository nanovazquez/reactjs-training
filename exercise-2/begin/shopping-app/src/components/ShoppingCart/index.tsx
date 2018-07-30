import * as React from 'react';
import './styles.css';
import { IProps } from './types';

class ShoppingCart extends React.PureComponent<IProps, {}> {
  public renderShoppingCartItems() {
    const { items } = this.props;

    if (!items || !items.length) {
      return <p className="shopping-cart-empty">No items</p>
    }

    return items.map(item => (
      <div key={item.id} className="shopping-cart-item">
        <img className="shopping-cart-item-image" src={item.imageUrl} />
        <span className="shopping-cart-item-name">{ item.name }</span>
        <span className="shopping-cart-item-price">{ item.price }</span>
      </div>
    ));
  }

  public render() {
    return (
      <div className="shopping-cart">
        <h2 className="shopping-cart-title">Shopping cart items</h2>
        <div className="shopping-cart-items">
          { this.renderShoppingCartItems() }
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
