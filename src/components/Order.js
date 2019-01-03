import React, { Component } from "react";
import styled from "styled-components";
import Bottom from "./Bottom";
import Bscroll from "better-scroll";
import { getTopArr } from "./../selectors";

class Order extends Component {
  state = {
    tab: "热销榜"
  };
  componentDidMount() {
    const { getGoods } = this.props;
    getGoods();
  }
  componentDidUpdate() {
    //   props或是state更新之后，页面重复新渲染完毕
    const { goods } = this.props;
    //通过goods数组创建一个新数组
    this.isHaveScroll = true;
    if (goods.length && this.isHaveScroll) {
      this.isHaveScroll = false;
      this.BScroll = new Bscroll(this.right, {
        mouseWheel: true
      });
    }
    const goodsArr = getTopArr(goods);
    // console.log(goodsArr);

    this.BScroll.on("scroll", ({ y }) => {
      // console.log(-y);
      for (let i = 0; i < goodsArr.length; i++) {
        if (y >= goodsArr[goodsArr.length - 1]) {
          this.setState({
            tab: "精品榜"
          });
        } else if (-y >= goodsArr[i] && -y < goodsArr[i + 1]) {
          this.setState({
            tab: i === 0 ? "热销榜" : "优惠榜"
          });
        }
      }
    });
  }

  render() {
    const { goods, cart, addCart, removeCart } = this.props;
    const { tab } = this.state;
    const cateContainer = (
      <ul className="cateList">
        {goods.length
          ? goods.map((e, index) => (
              <li
                className={tab === e.name ? "active-li" : ""}
                key={e.id}
                onClick={() => {
                  this.clickChange(index, e.name);
                }}
              >
                {e.name}
              </li>
            ))
          : "稍等……"}
      </ul>
    );
    const container = (
      <ul className="cateList">
        {goods.length
          ? goods.map((ele, index) => (
              <div
                className={`part `}
                ref={ele => {
                  this[`foodlist${index}`] = ele;
                }}
                key={ele.id}
              >
                <p>{ele.name}</p>
                {ele.foods.map(e => (
                  <li key={e.id}>
                    <div className="img">
                      <img src={e.image} alt="" />
                    </div>
                    <div className="dis">
                      <p>{e.name}</p>
                      <p>{e.description}</p>
                      <p className="price">￥{e.price}</p>
                    </div>
                    <div className="addCart">
                      {cart.quantityByid[e.id] ? (
                        <>
                          <button
                            onClick={() => {
                              removeCart(e.id);
                            }}
                          >
                            -
                          </button>
                          <p>{cart.quantityByid[e.id]}</p>
                        </>
                      ) : (
                        ""
                      )}
                      <button
                        className="add"
                        onClick={() => {
                          addCart(e.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </div>
            ))
          : "稍等……"}
      </ul>
    );
    return (
      <>
        <Pro>
          <div className="product">
            <div className="left">{cateContainer}</div>
            <div
              className="right"
              ref={wrap => {
                this.right = wrap;
              }}
            >
              {container}
            </div>
          </div>
        </Pro>
        <Bottom cart={cart} goods={goods} />
      </>
    );
  }
  clickChange = (index, name) => {
    //   只要更新了props或是state下面的判断就会重新执行
    this.setState({
      tab: name
    });
    // this.isHaveScroll = false;
    this.BScroll.scrollToElement(this[`foodlist${index}`], 1000);
  };
}

export default Order;
const Pro = styled.div`
  display: flex;
  flex-direction: column;
  .product {
    display: flex;
    flex-shrink: 0;
  }
  .left {
    width: 30%;
    text-align: center;
    li {
      padding-top: 5px;
      padding-bottom: 10px;
      background: #f6f6f6;
    }
  }
  .right {
    overflow: scroll;
    width: 70%;
    height: 85vh;
    p {
      font-size: 12px;
      color: #444;
    }
    .img {
      width: 28%;
      img {
        width: 100%;
      }
    }
    .part > li {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      .dis {
        margin-left: 2%;
        width: 30%;
      }
      .price {
        font-size: 16px;
        color: #fb4e44;
        font-weight: bold;
      }
    }
    .addCart {
      width: 38%;
      padding-top: 45px;
      button {
        border-radius: 50%;
        width: 25px;
        height: 25px;
        background: #f8c74e;
        border: none;
        outline: none;
        margin-right: 5px;
        margin-left: 5px;
      }
      p {
        line-height: 25px;
      }
      .add {
        margin-right: 20px;
      }
      display: flex;
      justify-content: flex-end;
    }
  }
  .left .active-li {
    background: #fff;
    color: maroon;
  }
`;
