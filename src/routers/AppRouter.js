import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StopWatches from "../containers/StopWatches.jsx";

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" component={StopWatches} exact={true} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
