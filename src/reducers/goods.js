import { GET_FOODS } from "./../constants/actionTypes";

const goods = (state = [], action) => {
  switch (action.type) {
    case GET_FOODS:
      return action.goods;
    default:
      return state;
  }
};
export default goods;
