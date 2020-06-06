import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ ...props }) => {
  const { isAuthenticated } = useSelector(({ user }) => user);

  return isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
