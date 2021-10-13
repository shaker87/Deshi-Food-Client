import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/SharedComponents/Navbar/Navbar";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/SharedComponents/Footer/Footer";
import Login from "./components/Login/Login";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Signup from "./components/Signup/Signup";

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Subscribe />
      <Footer />
    </Router>
  );
}

export default App;
