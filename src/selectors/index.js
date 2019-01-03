// 此文件是为了导出一些重复且简单的操作,计算衍生数据
export const totalNum = cart =>
  cart.goodsId.reduce((sum, ele) => (sum = sum + cart.quantityByid[ele]), 0);
export const totalPrice = (cart, goods) =>
  cart.goodsId.reduce((sum, ele) =>
    //   return sum =
    //     sum +
    //     cart.quantityByid[ele] *

    //       // goods.find(element => element.foods.findIndex(e=>e.id===ele)!=-1)
    // }, 0);
    {
      // console.log(sum);
      return (sum =
        sum +
        cart.quantityByid[ele] *
          goods
            .find(element => element.foods.findIndex(m => m.id === ele) !== -1)
            .foods.find(e => e.id === ele).price);
    }, 0);
export const getTopArr = goods => {
  const arr = goods.map((e, index) => {
    return document.querySelectorAll(".part")[index].offsetTop;
  });
  return arr;
};
