import * as React from 'react';
import ShoppingCart from '../ShoppingCart';
import TopBar from '../TopBar';
import './styles.css';
import { IProps, IProduct } from './types';

class App extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  public getPages() {
    const { pathname } = window.location;

    if (pathname === '/') {
      return [{ name: 'Home', url: '/' }];
    }

    return pathname.split('/').map(item => ({
      name: item ? item[0].toUpperCase() + item.slice(1).replace('-', ' ') : 'Home',
      url: `/${item}`
    }));
  }

  public handleRemoveShoppingCartItem = (itemToRemove: IProduct) => {
    const { onRemoveShoppingCartItem = () => {} } = this.props;
    onRemoveShoppingCartItem(itemToRemove);
  }

  public render() {
    const pages = this.getPages();
    const { shoppingCartItems = [] } = this.props;

    return (
      <div className="app">
       <TopBar pages={pages} itemsInCart={shoppingCartItems.length} />
       <ShoppingCart items={shoppingCartItems} onItemRemove={this.handleRemoveShoppingCartItem} />
      </div>
    );
  }
}

export default App;
