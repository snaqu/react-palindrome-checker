import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./misc/ProtectedRoute";

import Login from "./pages/Unauthorized/Login";
import Home from "./pages/Authorized/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/home" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
