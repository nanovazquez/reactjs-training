import * as React from 'react';
import './styles.css';
import { IProps } from './types';

class Home extends React.PureComponent<IProps> {

  public componentDidMount() {
    const { products, fetchProducts } = this.props;

    if (!products) {
      fetchProducts();
    }
  }

  public handleItemClick = (evt: any) => {
    const { products, addProductToCart } = this.props;
    evt.preventDefault();

    const productToAdd = products.find(item => item.id === evt.currentTarget.dataset.id);
    if (productToAdd) {
      addProductToCart(productToAdd);
    }
  }

  public render() {
    return (
      <div className="home">
        { this.renderProducts() }
      </div>
    );
  }

  private renderProducts() {
    const { products } = this.props;

    if (!products || !products.length) {
      return <p className="home-empty">No products</p>;
    }

    return products.map(item => (
      <a href="" key={item.id} className="product-item" data-id={item.id} onClick={this.handleItemClick}>
        <img className="product-item-image" src={item.imageUrl} />
        <span className="product-item-name">{item.name}</span>
        <span className="product-item-price">{item.price}</span>
      </a>
    ));
  }
}

export default Home;
