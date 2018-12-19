import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Refresh from "@material-ui/icons/Refresh";
import { connect } from "react-redux";
import { reset } from "../actions/root-actions";
import { bindActionCreators } from "redux";

const Reset = props => {
  return (
    <IconButton aria-label="Reset" onClick={props.reset}>
      <Refresh fontSize="large" />
    </IconButton>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      reset
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reset);
