import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/SharedComponents/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

     
    </Router>
  );
}

export default App;
