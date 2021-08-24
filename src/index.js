import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import * as Terminal from 'javascript-terminal';

window.Terminal = Terminal;

ReactDOM.render(
    <App />,
  document.getElementById('root')
);