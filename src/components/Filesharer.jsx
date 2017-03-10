import React from 'react';
import ReactDOM from 'react-dom';

class FileSharer extends React.Component {

 render() {
  //render anywhere else
  return(
    <form className="email-selector">
      <h2>Add your files </h2>
      <input type="text" required placeholder="Email to" />
      <br/>
      <input type="text" required placeholder="Your email" />
      <br/>
      <input type="message" required placeholder="Message" />
      <br/>
      <button type="submit">Transfer</button>
      </form>
    )


  }
}


export default FileSharer;
