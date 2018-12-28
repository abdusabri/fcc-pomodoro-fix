import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  incrementBreakLength,
  decrementBreakLength,
  setBreakLength
} from "../actions/break-actions";

const WithBreakLength = props => {
  const handleIncrement = () => {
    props.incrementBreakLength(props.breakLength);
  };

  const handleDecrement = () => {
    props.decrementBreakLength(props.breakLength);
  };

  const handleSet = event => {
    props.setBreakLength(props.breakLength, event.target.value);
  };

  return (
    <React.Fragment>
      {props.render(
        "Break",
        props.breakLength,
        handleIncrement,
        handleDecrement,
        handleSet
      )}
    </React.Fragment>
  );
};

WithBreakLength.propTypes = {
  render: PropTypes.func.isRequired
};

const mapStateToProps = ({ breakLength }) => ({
  breakLength
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      incrementBreakLength,
      decrementBreakLength,
      setBreakLength
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithBreakLength);
