import React, { Component } from "react";
import "./../static/global.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

class App extends Component {
  render() {
    document.documentElement.style.fontSize =
      document.documentElement.clientWidth / 6 + "px";
    return (
      <BrowserRouter>
        <>
          <Header />
          <Home />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
