import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import $ from './../jquery';
import Loader from './components/Loader';
import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('main')
);


ReactDOM.render(
  <Loader />,
  document.getElementById('watch-container')
);

