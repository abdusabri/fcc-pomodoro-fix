import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import { connect } from "react-redux";
import { decrementTimeLeft } from "../actions/clock-actions";
import { bindActionCreators } from "redux";

class PlayPause extends Component {
  interval = null;

  state = {
    isPaused: true
  };

  handleButtonClick = () => {
    this.setState({ isPaused: !this.state.isPaused }, () => {
      if (!this.state.isPaused) {
        this.playClock();
      } else {
        this.pauseClock();
      }
    });
  };

  playClock = () => {
    this.interval = setInterval(() => {
      this.props.decrementTimeLeft(this.props.timeLeft);
    }, 1000);
  };

  pauseClock = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <IconButton
        aria-label={this.state.isPaused ? "Play" : "Pause"}
        onClick={this.handleButtonClick}
      >
        {this.state.isPaused ? (
          <PlayArrow fontSize="large" />
        ) : (
          <Pause fontSize="large" />
        )}
      </IconButton>
    );
  }
}

const mapStateToProps = ({ clock }) => ({
  timeLeft: clock.timeLeft
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      decrementTimeLeft
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayPause);
