import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound}></Route>
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
