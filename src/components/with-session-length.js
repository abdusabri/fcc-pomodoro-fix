import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  incrementSessionLength,
  decrementSessionLength,
  setSessionLength
} from "../actions/session-actions";

const WithSessionLength = props => {
  const handleIncrement = () => {
    props.incrementSessionLength(props.sessionLength);
  };

  const handleDecrement = () => {
    props.decrementSessionLength(props.sessionLength);
  };

  const handleSet = event => {
    props.setSessionLength(props.sessionLength, event.target.value);
  };

  return (
    <React.Fragment>
      {props.render(
        "Session",
        props.sessionLength,
        handleIncrement,
        handleDecrement,
        handleSet
      )}
    </React.Fragment>
  );
};

WithSessionLength.propTypes = {
  render: PropTypes.func.isRequired
};

const mapStateToProps = ({ sessionLength }) => ({
  sessionLength
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      incrementSessionLength,
      decrementSessionLength,
      setSessionLength
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithSessionLength);
