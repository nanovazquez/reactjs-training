import * as React from 'react';
import './styles.css';
import { IProps } from './types';

class ShoppingCart extends React.PureComponent<IProps> {

  public handleItemRemove = (evt: any) => {
    const { items = [], onItemRemove = () => {} } = this.props;
    evt.preventDefault();

    const itemToRemove = items.find(item => item.id === evt.currentTarget.dataset.id);
    if (itemToRemove) {
      onItemRemove(itemToRemove);
    }
  }

  public renderShoppingCartItems() {
    const { items } = this.props;

    if (!items || !items.length) {
      return <p className="shopping-cart-empty">No items</p>
    }

    return items.map(item => (
      <div key={item.id} className="shopping-cart-item">
        <img className="shopping-cart-item-image" src={item.imageUrl} />
        <span className="shopping-cart-item-name">{item.name}</span>
        <span className="shopping-cart-item-price">{item.price}</span>
        <a href="" className="shopping-cart-item-remove" data-id={item.id} onClick={this.handleItemRemove} >Remove</a>
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
