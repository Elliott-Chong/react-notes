import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import SingleMovie from "./SingleMovie";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/movies/:id" component={SingleMovie}></Route>
    </Switch>
  );
}

export default App;
