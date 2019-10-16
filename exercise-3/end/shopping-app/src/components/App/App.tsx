import * as React from 'react';
import ShoppingCart from '../ShoppingCart';
import TopBar from '../TopBar';
import './styles.css';
import { IProps } from './types';

class App extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public handleRemoveShoppingCartItem = (itemToRemoveId: string) => {
    const { onRemoveShoppingCartItem = (id: string) => id } = this.props;
    onRemoveShoppingCartItem(itemToRemoveId);
  }

  public getPages() {
    const currentUrl = window.location.pathname;

    if (currentUrl === '/') {
      return [{ name: 'Home', url: '/' }];
    }

    return window.location.pathname.split('/').map(item => ({
      name: item ? item.replace('-', ' ').toUpperCase() : 'Home',
      url: `/${item}`
    }));
  }

  public componentDidMount() {
    const { userId, fetchUserShoppingCartItems = (id: string) => Promise.resolve([]) } = this.props;
    fetchUserShoppingCartItems(userId);
  }

  public render() {
    const pages = this.getPages();
    const { shoppingCartItems } = this.props;

    return (
      <div className="app">
       <TopBar pages={pages} itemsInCart={shoppingCartItems.length} />
       <ShoppingCart items={shoppingCartItems} onItemRemove={this.handleRemoveShoppingCartItem} />
      </div>
    );
  }
}

export default App;
