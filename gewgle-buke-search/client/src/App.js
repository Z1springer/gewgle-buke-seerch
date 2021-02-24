import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Bukes from "./pages/Bukes";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            <Bukes />
          </Route>
          {/* <Route exact path="/books/:id">
            <Individual />
          </Route>
          <Route>
            <Favourites />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
