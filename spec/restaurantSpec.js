describe('Restaurant', function() {
  var restaurant;

  beforeEach(function() {
    restaurant = new Restaurant('test');
  });

  it('can create a new restaurant with a name', function() {
    expect(restaurant.getName()).toEqual('test');
  });

  it('can list return with prices', function() {
    restaurant.getPrice('spaghetti');
    expect(restaurant.finalPrice()).toEqual(2);
  });

  it('can tell you the price of a meal', function() {
    restaurant.getPrice('pizza');
    expect(restaurant.finalPrice()).toEqual(3);
  });

  it('can add a meal to the order', function() {
    restaurant.addOrder('spaghetti');
    restaurant.getPrice('spaghetti');
    expect(restaurant.allOrders()).toContain('spaghetti');
  })

  it('can have several meals on an order', function() {
    restaurant.addOrder('spaghetti');
    restaurant.getPrice('spaghetti');
    restaurant.addOrder('pizza');
    restaurant.getPrice('pizza');
    restaurant.addOrder('chilli');
    restaurant.getPrice('chilli');
    expect(restaurant.allOrders()).toContain('spaghetti', 'pizza', 'chilli');
    expect(restaurant.finalPrice()).toEqual(9);
  })

  it('will add items cost to tell you the final price', function() {
    restaurant.addOrder('spaghetti');
    restaurant.getPrice('spaghetti');
    restaurant.addOrder('pizza');
    restaurant.getPrice('pizza');
    expect(restaurant.finalPrice()).toEqual(5);
  })

})
