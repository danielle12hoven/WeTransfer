import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
// import './index.css';
import Spinner from './components/Spinner'
import FileSharer from './components/Filesharer.jsx'
import './App.css';


ReactDOM.render(
  <Header />,
  document.getElementById('main')
);


ReactDOM.render(
  <Spinner />,
  document.getElementById('spinner')
);


ReactDOM.render(
  <FileSharer />,
  document.getElementById('body')
);



