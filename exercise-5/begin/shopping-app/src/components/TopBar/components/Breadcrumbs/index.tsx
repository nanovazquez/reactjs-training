import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './styles.css';
import { IProps } from './types';

class Breadcrumbs extends React.PureComponent<IProps> {
  public renderPageLinks() {
    const { pages } = this.props;

    if (!pages) {
      return null;
    }

    return pages.map((item, index) => (
      <React.Fragment key={item.url}>
        <Link className="breadcrumbs-link" to={item.url}>{ item.name }</Link>
        { index + 1 < pages.length && <span className="breadcrumbs-separator" /> }
      </React.Fragment>
    ));
  }

  public render() {
    return (
      <div className="breadcrumbs">
        <img className="breadcrumbs-logo" src={logo} />
        { this.renderPageLinks() }
      </div>
    );
  }
}

export default Breadcrumbs;
