import React, { Component } from "react";
import styled from "styled-components";
import { totalNum, totalPrice } from "../selectors";

class Bottom extends Component {
  render() {
    const { cart, goods } = this.props;
    console.log(cart.goodsId.length);
    const cartContent = cart.goodsId.length ? (
      <div className="bot">
        <span>数量：{totalNum(cart)}</span>
        <span>配送费:4元</span>
        <span>总价：{totalPrice(cart, goods) + 4}</span>
      </div>
    ) : (
      <div className="bot">
        <span>0</span>
        <span>需配送费4元</span>
        <span>￥18元起送</span>
      </div>
    );
    return <Bott>{cartContent}</Bott>;
  }
}

export default Bottom;
const Bott = styled.div`
  background: #666;
  height: 6vh;
  color: #f1f1f1;
  line-height: 6vh;
  .bot {
    display: flex;
    justify-content: space-around;
  }
`;
