import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";

class PlayPause extends Component {
  state = {
    isPaused: true
  };

  handleButtonClick = () => {
    this.setState({ isPaused: !this.state.isPaused });
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

export default PlayPause;
