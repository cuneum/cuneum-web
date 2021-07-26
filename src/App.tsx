import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}
