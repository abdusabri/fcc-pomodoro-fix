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

const Length = ({
  classes,
  lengthLabel,
  lengthValue,
  onIncrement,
  onDecrement
}) => {
  return (
    <div
      style={{ justifyContent: "center", textAlign: "center", margin: "1rem" }}
    >
      <ClockElementLabel
        labelText={`${lengthLabel} Length`}
        labelId={`${lengthLabel.toLowerCase()}-label`}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <IconButton
          aria-label={`Decrement ${lengthLabel} Length`}
          style={iconStyle}
          onClick={onDecrement}
          id={`${lengthLabel.toLowerCase()}-decrement`}
        >
          <RemoveCircleOutline />
        </IconButton>

        <TextField
          disabled
          margin="normal"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.input
            }
          }}
          value={lengthValue}
          id={`${lengthLabel.toLowerCase()}-length`}
        />
        <IconButton
          aria-label={`Increment ${lengthLabel} Length`}
          style={iconStyle}
          onClick={onIncrement}
          id={`${lengthLabel.toLowerCase()}-increment`}
        >
          <AddCircleOutline />
        </IconButton>
      </div>
    </div>
  );
};

Length.propTypes = {
  classes: PropTypes.object.isRequired,
  lengthLabel: PropTypes.string.isRequired,
  lengthValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default withStyles(classes)(Length);
