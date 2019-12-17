import React from "react";
import "./App.css";
import { Route, Router } from "react-router-dom";
import { Home, About, Contact, Navigation } from "./components";

const App = () => (
  <div>
    <Navigation />

    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/About">
      <About />
    </Route>
    <Route path="/About">
      <Contact />
    </Route>
  </div>
);

export default App;
