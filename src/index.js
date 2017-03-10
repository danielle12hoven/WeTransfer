import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import Spinner from './components/Spinner'

ReactDOM.render(
  <App />,
  document.getElementById('main')
);

ReactDOM.render(
  <Spinner />,
  document.getElementById('body')
);

var options = {
  peerjs_key: 'your peerjs key'
};
