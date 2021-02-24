import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Individual />
          </Route>
          <Route>
            <Favourites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
