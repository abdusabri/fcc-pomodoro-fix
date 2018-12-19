import React from "react";
import ClockElementLabel from "./clock-element-label";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const classes = {
  input: {
    fontSize: "4rem",
    textAlign: "center",
    width: "12rem"
  }
};

const Session = ({ classes, activeSessionLabel, timeLeft }) => {
  return (
    <div
      style={{ justifyContent: "center", textAlign: "center", margin: "1rem" }}
    >
      <ClockElementLabel labelText={activeSessionLabel} />
      <TextField
        disabled
        margin="normal"
        variant="outlined"
        InputProps={{
          classes: {
            input: classes.input
          }
        }}
        value={timeLeft}
      />
    </div>
  );
};

Session.propTypes = {
  classes: PropTypes.object.isRequired,
  activeSessionLabel: PropTypes.string.isRequired,
  timeLeft: PropTypes.string.isRequired
};

export default withStyles(classes)(Session);
