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

const Session = ({ classes }) => {
  return (
    <div
      style={{ justifyContent: "center", textAlign: "center", margin: "1rem" }}
    >
      <ClockElementLabel labelText="Session" />
      <TextField
        disabled
        defaultValue="12:37"
        margin="normal"
        variant="outlined"
        InputProps={{
          classes: {
            input: classes.input
          }
        }}
      />
    </div>
  );
};

Session.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(classes)(Session);
