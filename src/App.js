import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "pages/Unauthorized/Login";
import Home from "pages/Authorized/Home";
import ErrorPage from "pages/Error";

import ProtectedRoute from "misc/ProtectedRoute";

import useStyle from "./App.styles";

const App = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/home" component={Home} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
