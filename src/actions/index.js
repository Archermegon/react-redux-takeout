import axios from "axios";
import * as actionTypes from "./../constants/actionTypes";

export const getGoods = () => dispatch => {
  axios.get("http://localhost:2019/goods").then(res => {
    dispatch({
      type: actionTypes.GET_FOODS,
      goods: res.data
    });
  });
};

export const addCart = id => dispatch => {
  dispatch({
    type: actionTypes.ADD_CART,
    id
  });
};
export const removeCart = id => dispatch => {
  dispatch({
    type: actionTypes.REMOVE_CART,
    id
  });
};
