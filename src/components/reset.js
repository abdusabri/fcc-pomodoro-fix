import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Refresh from "@material-ui/icons/Refresh";

const Reset = props => {
  return (
    <IconButton aria-label="Reset">
      <Refresh fontSize="large" />
    </IconButton>
  );
};

export default Reset;
