import React from "react";
import PropTypes from "prop-types";

const WithClock = props => {
  return <React.Fragment>{props.render("Session", "17:29")}</React.Fragment>;
};

WithClock.propTypes = {
  render: PropTypes.func.isRequired
};

export default WithClock;
