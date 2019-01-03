import React from "react";
import Order from "../components/Order";
import { connect } from "react-redux";
import { getGoods, addCart, removeCart } from "./../actions";

const OrderContainer = props => {
  // console.log(props.cart);
  return <Order {...props} />;
};

const mapStatetoProps = state => {
  // console.log(state.cart);
  return {
    goods: state.goods,
    cart: state.cart
  };
};
export default connect(
  mapStatetoProps,
  { getGoods, addCart, removeCart }
)(OrderContainer);
