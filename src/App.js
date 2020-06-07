import React, { useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";

import ProtectedRoute from "misc/ProtectedRoute";
import { getToken } from "utils/authentication";

import Login from "pages/Unauthorized/Login";
import Home from "pages/Authorized/Home";
import ErrorPage from "pages/Error";

import useStyle from "./App.styles";

const App = () => {
  const classes = useStyle();
  const history = useHistory();

  useEffect(() => {
    const currentLocation = history.location.pathname;
    const isOnUnauthorizedRoute = currentLocation === "/login" || currentLocation === "/";

    const token = getToken();
    if (token && isOnUnauthorizedRoute) {
      history.push("/home");
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default App;
