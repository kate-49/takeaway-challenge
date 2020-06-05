class Restaurant {

  constructor(name) {
    this.name = name;
    this.finalmenu = {'spaghetti': 2, 'pizza': 3, 'chilli': 4};
    this.order = []
    this.totalprice = []
  }

  getName() {
    return this.name;
  }

  getPrice(item) {
    var price = this.finalmenu[item];
    this.totalprice.push(price)
  }

  listMealChoices() {
    return this.finalmenu
  }

  addOrder(meal) {
    this.order.push(meal);
  }

  allOrders() {
    return this.order
  }

  finalPrice() {
    var sum = this.totalprice.reduce(function(a, b){
        return a + b;
    }, 0);
    return sum;
  }

}
