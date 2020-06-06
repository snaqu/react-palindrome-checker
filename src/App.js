import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "misc/ProtectedRoute";

import Login from "pages/Unauthorized/Login";
import Home from "pages/Authorized/Home";

import useStyle from "./App.styles";

const App = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <Router>
        <Switch>
          <ProtectedRoute path="/home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
