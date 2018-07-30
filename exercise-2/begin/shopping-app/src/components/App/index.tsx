import * as React from 'react';
import usersService from '../../services/users-service';
import ShoppingCart from '../ShoppingCart';
import TopBar from '../TopBar';
import './styles.css';
import { IProps, IState } from './types';

class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { shoppingCartItems: [] };
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
    const { userId } = this.props;
    return usersService.getUserShoppingCartItems(userId)
      .then(items => this.setState({ shoppingCartItems: items }))
  }

  public render() {
    const pages = this.getPages();
    const { shoppingCartItems } = this.state;

    return (
      <div className="app">
       <TopBar pages={pages} itemsInCart={shoppingCartItems.length} />
       <ShoppingCart items={shoppingCartItems} />
      </div>
    );
  }
}

export default App;
