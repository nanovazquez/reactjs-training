import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App userId="user-id" />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
