import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Home';
import ShoppingCart from '../ShoppingCart';
import TopBar from '../TopBar';
import './styles.css';
import { IProps } from './types';

class App extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public getPages() {
    const { pathname } = this.props;

    if (pathname === '/') {
      return [{ name: 'Home', url: '/' }];
    }

    return pathname.split('/').map(item => ({
      name: item ? item[0].toUpperCase() + item.slice(1).replace('-', ' ') : 'Home',
      url: `/${item}`
    }));
  }

  public render() {
    const pages = this.getPages();
    const { shoppingCartItems = [] } = this.props;

    return (
      <div className="app">
       <TopBar pages={pages} itemsInCart={shoppingCartItems.length} />
       <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route component={ShoppingCart} />
        </Switch>
      </div>
    );
  }
}

export default App;
