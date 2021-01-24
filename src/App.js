import React from "react";
import { Homepage, Login, Repositories } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact={true}>
          <Homepage></Homepage>
        </Route>
        <Route path="/repositories" exact={true}>
          <Repositories></Repositories>
        </Route>
        <Route path="/">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
