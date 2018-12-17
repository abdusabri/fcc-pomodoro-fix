import React from "react";
import PropTypes from "prop-types";

const ClockElementLabel = ({ labelText }) => {
  return (
    <span style={{ fontSize: "1.5rem", fontWeight: "400", display: "block" }}>
      {labelText}
    </span>
  );
};

ClockElementLabel.propTypes = {
  labelText: PropTypes.string.isRequired
};

export default ClockElementLabel;
