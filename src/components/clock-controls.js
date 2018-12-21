import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Refresh from "@material-ui/icons/Refresh";
import { connect } from "react-redux";
import { decrementTimeLeft, playPauseClock } from "../actions/clock-actions";
import { reset } from "../actions/root-actions";
import { bindActionCreators } from "redux";

class ClockControls extends Component {
  interval = null;

  handleButtonClick = () => {
    if (this.props.isPaused) {
      this.playClock();
    } else {
      this.pauseClock();
    }
    this.props.playPauseClock(this.props.isPaused);
  };

  playClock = () => {
    this.interval = setInterval(() => {
      this.props.decrementTimeLeft(
        this.props.timeLeft,
        this.props.sessionLength,
        this.props.breakLength
      );
      if (this.props.timeLeft === 0) {
        this.audioRef.currentTime = 0; // https://stackoverflow.com/questions/13002935/html5-audio-start-over
        this.audioRef.play();
      }
    }, 1000);
  };

  pauseClock = () => {
    clearInterval(this.interval);
  };

  handleReset = () => {
    this.pauseClock();
    this.props.reset();
  };

  audioRef = null;

  render() {
    return (
      <React.Fragment>
        <IconButton
          aria-label={this.props.isPaused ? "Play" : "Pause"}
          onClick={this.handleButtonClick}
        >
          {this.props.isPaused ? (
            <PlayArrow fontSize="large" />
          ) : (
            <Pause fontSize="large" />
          )}
        </IconButton>
        <IconButton aria-label="Reset" onClick={this.handleReset}>
          <Refresh fontSize="large" />
        </IconButton>
        <audio
          ref={element => (this.audioRef = element)}
          id="beep"
          src="http://soundbible.com/mp3/Fire_pager-jason-1283464858.mp3"
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ clock, sessionLength, breakLength }) => ({
  timeLeft: clock.timeLeft,
  isPaused: clock.isPaused,
  sessionLength,
  breakLength
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      decrementTimeLeft,
      playPauseClock,
      reset
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClockControls);
