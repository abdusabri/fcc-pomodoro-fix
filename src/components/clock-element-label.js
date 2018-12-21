import React from "react";
import PropTypes from "prop-types";

const ClockElementLabel = ({ labelText, labelId }) => {
  return (
    <span
      id={labelId}
      style={{ fontSize: "1.5rem", fontWeight: "400", display: "block" }}
    >
      {labelText}
    </span>
  );
};

ClockElementLabel.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired
};

export default ClockElementLabel;
