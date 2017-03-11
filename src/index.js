import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Spinner from './components/Spinner';
import StopWatch from './components/StopWatch';
// import FileSharer from './components/Filesharer.jsx'
import './index.css';


ReactDOM.render(
  <Header />,
  document.getElementById('main')
);


ReactDOM.render(
  <Spinner />,
  document.getElementById('spinner')
);



ReactDOM.render(
  <StopWatch />,
  document.getElementById('watch-container')
);
