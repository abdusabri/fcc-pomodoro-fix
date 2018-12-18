import React from "react";
import ClockElementLabel from "./clock-element-label";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutline from "@material-ui/icons/RemoveCircleOutline";

const classes = {
  input: {
    fontSize: "2rem",
    textAlign: "center",
    width: "4rem",
    height: "0.75rem"
  }
};

const iconStyle = {
  marginTop: "9px"
};

const SessionLength = ({ classes, sessionLabel }) => {
  return (
    <div
      style={{ justifyContent: "center", textAlign: "center", margin: "1rem" }}
    >
      <ClockElementLabel labelText={`${sessionLabel} Length`} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <IconButton
          aria-label={`Decrement ${sessionLabel} Length`}
          style={iconStyle}
        >
          <RemoveCircleOutline />
        </IconButton>

        <TextField
          disabled
          defaultValue="25"
          margin="normal"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.input
            }
          }}
        />
        <IconButton
          aria-label={`Increment ${sessionLabel} Length`}
          style={iconStyle}
        >
          <AddCircleOutline />
        </IconButton>
      </div>
    </div>
  );
};

SessionLength.propTypes = {
  classes: PropTypes.object.isRequired,
  sessionLabel: PropTypes.string.isRequired
};

export default withStyles(classes)(SessionLength);
