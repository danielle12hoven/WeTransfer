import React from 'react';
import ReactDOM from 'react-dom';


class Loader extends React.Component {
  render() {
    return (

<div id="loader-wrapper">
    <div id="loader"></div>
    <div id="button-wrapper">
      <button id="startButton" type="submit">Start</button>
      <button id="stopButton" type="submit">Stop</button>
    </div>
</div>
    )
  }
}


export default Loader;
