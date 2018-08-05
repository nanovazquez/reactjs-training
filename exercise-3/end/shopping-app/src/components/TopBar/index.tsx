import * as React from 'react';
import { Breadcrumbs, ShoppingCartStatus } from './components';
import './styles.css';
import {  IProps } from './types';

class TopBar extends React.PureComponent<IProps, {}> {
  public render() {
    const { itemsInCart, pages } = this.props;
    return (
      <div className="topbar">
        <div className="topbar-left-panel">
          <Breadcrumbs pages={pages} />
        </div>
        <div className="topbar-right-panel">
          <ShoppingCartStatus itemsInCart={itemsInCart} />
        </div>
      </div>
    );
  }
}

export default TopBar;
