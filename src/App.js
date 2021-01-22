import React from "react";
import { Homepage, Login, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Login></Login>
        </Route>
        <Route path="/login" exact={true}>
          <Login></Login>
        </Route>
        <Route path="/desafio_git" exact={true}>
          <Login></Login>
        </Route>
        <Route path="/home" exact={true}>
          <Homepage></Homepage>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
