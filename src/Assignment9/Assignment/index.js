import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "../Modules/Login";
import Dashboard from "../Modules/Dashboard";
import Description from "../Components/Description";

export default function Assignment9() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <LoginForm />
        </Route>
        <Route path={"/dashboard"} exact>
          <Dashboard />
        </Route>
        <Route path={"/mobileDescription/:Id"} exact>
          <Description />
        </Route>
      </Switch>
    </Router>
  );
}
