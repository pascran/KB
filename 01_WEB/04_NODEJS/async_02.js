const orderPizza = false;
const pizza = new Promise((resolve, reject) => {
  if (orderPizza) resolve('피자를 주문했습니다');
  else reject('피자 시켜라');
});

pizza.then((result) => console.log(result)).catch((err) => console.log(err));
