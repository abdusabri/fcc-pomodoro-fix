import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFormatedTimeLeft } from "../utils";

const WithClock = props => {
  return (
    <React.Fragment>
      {props.render(props.activeSession, props.timeLeft)}
    </React.Fragment>
  );
};

WithClock.propTypes = {
  render: PropTypes.func.isRequired
};

const mapStateToProps = ({ clock }) => ({
  activeSession: clock.activeSession,
  timeLeft: getFormatedTimeLeft(clock.timeLeft)
});

export default connect(mapStateToProps)(WithClock);
