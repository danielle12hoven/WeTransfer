import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const formattedSeconds = (sec) =>
    Math.floor(sec / 100) +
  ('0' + sec % 100).slice(-2) + '%'


class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      laps: [],
      lastClearedIncrementer: null
    };
    this.incrementer = null;
  }

  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      }), 120);
  }

  // handleChangeLoad() {
  //     this.setState({
  //         var spinCircle = ("#loader:after")
  //     })
  //   )
  // }



  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: []
    });
  }


  render() {
    return (
      <div className="percentage">
        <h1 className="percentage-loader">{formattedSeconds(this.state.secondsElapsed)}</h1>

        {(this.state.secondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button className="start-btn" onClick={this.handleStartClick.bind(this)}>start</Button>
          : <Button className="stop-btn" onClick={this.handleStopClick.bind(this)}>stop</Button>
        )}


        {(this.state.secondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button onClick={this.handleResetClick.bind(this)}>reset</Button>
          : null
        )}

      </div>
    );
  }
}

export default Loader;

const Button = (props) =>
  <button type="button" {...props} className={"btn " + props.className } onClick={props.onClick} />;

const fakeDropDown2 = function() {
  $( "#loader" ).show("slow")
}
  $(".start-btn").click(fakeDropDown2)



