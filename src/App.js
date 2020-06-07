import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

import ProtectedRoute from "misc/ProtectedRoute";
import { getToken } from "utils/authentication";

import Login from "pages/Unauthorized/Login";
import Home from "pages/Authorized/Home";

import useStyle from "./App.styles";

const App = () => {
  const classes = useStyle();
  const history = useHistory();

  useEffect(() => {
    const token = getToken();

    if (token) {
      history.push("/home");
    }
  }, []);

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
