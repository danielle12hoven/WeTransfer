import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
// import Spinner from './components/Spinner';
import Loader from './components/Loader';
// import FileSharer from './components/Filesharer.jsx'
import './index.css';


ReactDOM.render(
  <Header />,
  document.getElementById('main')
);


ReactDOM.render(
  <Loader />,
  document.getElementById('watch-container')
);
