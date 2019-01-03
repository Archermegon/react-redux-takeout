import { ADD_CART, REMOVE_CART } from "./../constants/actionTypes";

const cart = (
  state = {
    goodsId: [],
    quantityByid: {}
  },
  action
) => {
  switch (action.type) {
    case ADD_CART:
      const { id } = action;
      const newState = { ...state };
      if (newState.goodsId.indexOf(id) === -1) {
        newState.goodsId.push(id);
        newState.quantityByid[id] = 1;
      } else {
        newState.quantityByid[id]++;
      }
      console.log(newState);
      return newState;
    case REMOVE_CART:
      const newState1 = { ...state };
      if (newState1.quantityByid[action.id] === 1) {
        newState1.goodsId.splice(newState1.goodsId.indexOf(action.id), 1);
        delete newState1.quantityByid[action.id];
      } else {
        newState1.quantityByid[action.id]--;
      }
      return newState1;
    default:
      return state;
  }
};
export default cart;
