import * as React from 'react';
import logo from '../logo.svg';

interface IProps {
  message: string;
}

export default class AppHero extends React.PureComponent<IProps> {
  public render() {
    const { message } = this.props;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{ message }</h1>
      </header>
    );
  }
}
