let p1 = {
  name: '아이패드',
  price: 200000,
  quantity: 2,
  order: function () {
    // 기존 방법
    if (!this.amount) {
      this.amount = this.quantity * this.price;
    }
    console.log('주문금액 : ' + this.amount);
  },
  // ES6의 메서드 선언
  discount(rate) {
    if (rate > 0 && rate < 80) {
      this.amount = ((100 - rate) / 100) * this.price * this.quantity;
    }
    console.log(rate + '% 할인된 금액으로 구매합니다.');
  },
};

p1.discount(20);
p1.order();
