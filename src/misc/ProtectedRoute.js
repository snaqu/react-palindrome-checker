import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "utils/authentication";

const ProtectedRoute = ({ ...props }) => {
  return isAuthenticated() ? <Route {...props} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
