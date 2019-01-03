import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Order from "./Order";
import Rating from "./Rating";
import Seller from "./Seller";
import OrderContainer from "../container/OrderContainer";

class Main extends Component {
  render() {
    return (
      <div>
        <>
          <Route component={OrderContainer} path="/" exact />
          <Route component={Rating} path="/ratings" />
          <Route component={Seller} path="/seller" />
        </>
      </div>
    );
  }
}

export default Main;
