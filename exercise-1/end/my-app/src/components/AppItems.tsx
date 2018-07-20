import * as React from 'react';

interface Item {
  id: number;
  title: string;
  body: string;
}

interface IProps {
  items?: Item[];
}

export default class AppItems extends React.PureComponent<IProps> {

  public renderItems() {
    const { items = [] } = this.props;

    if (!items.length) {
      return (<h4>No data to show</h4>);
    }

    return (
      <ul>
        {
          items.map(item => (
            <li key={item.id}>
              <h4>{ item.title }</h4>
              <p>{ item.body }</p>
            </li>
          ))
        }
      </ul>
    )
  }

  public render() {
    return (
      <div className="App-items">
        { this.renderItems() }
      </div>
    );
  }
}
