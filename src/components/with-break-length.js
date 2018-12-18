import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  incrementBreakLength,
  decrementBreakLength
} from "../actions/break-actions";

const WithBreakLength = props => {
  return (
    <React.Fragment>
      {props.render(
        "Break",
        props.breakLength,
        props.incrementBreakLength,
        props.decrementBreakLength
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
      decrementBreakLength
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithBreakLength);
