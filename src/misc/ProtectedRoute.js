import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isPermitted, ...props }) =>
  isPermitted ? <Route {...props} /> : <Redirect to="/" />;

ProtectedRoute.propTypes = {
  isPermitted: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
