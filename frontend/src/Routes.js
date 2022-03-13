import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Business from "./business/Business";
import Loan from "./loan/Loan";
import PageNotFound from "./404/PageNotFound";
import Personal from "./personal/Persoanl";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Personal} />
        <Route exact path="/loan" component={Loan} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/PageNotFound" component={PageNotFound} />
        <Redirect to="/PageNotFound" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
