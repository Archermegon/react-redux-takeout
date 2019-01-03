import React, { Component } from "react";
import Main from "./Main";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

class Home extends Component {
  render() {
    return (
      <>
        <Nav>
          <ul className="list">
            <li>
              <NavLink to="/" exact>
                点餐
              </NavLink>
            </li>
            <li>
              <NavLink to="/ratings">评价</NavLink>
            </li>
            <li>
              <NavLink to="/seller">商家</NavLink>
            </li>
          </ul>
        </Nav>
        <Content>
          <Main />
        </Content>
      </>
    );
  }
}

export default Home;
const Nav = styled.div`
  .list {
    display: flex;
    width: 100%;
    justify-content: space-around;
    a {
      color: #666;
      border-bottom: 2px solid #fff;
      line-height: 36px;
      display: block;
    }
  }
  a.active {
    border-bottom: 2px solid teal;
  }
`;
const Content = styled.div``;
