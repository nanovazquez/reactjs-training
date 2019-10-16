import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App userId="1" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
