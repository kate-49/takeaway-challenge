describe('Restaurant', function() {
  var restaurant;

  beforeEach(function() {
    restaurant = new Restaurant('test');
  });

  it('can create a new restaurant with a name', function() {
    expect(restaurant.getName()).toEqual('test');
  });

  it('can list return with prices', function() {
    expect(restaurant.getPrice('spaghetti')).toEqual(2);
  });

  it('can tell you the price of a meal', function() {
    expect(restaurant.getPrice('pizza')).toEqual(3);
  });

  it('can add a meal to the order', function() {
    restaurant.addOrder('spaghetti');
    expect(restaurant.allOrders()).toContain('spaghetti');
  })

  it('can have several meals on an order', function() {
    restaurant.addOrder('spaghetti');
    restaurant.addOrder('pizza');
    restaurant.addOrder('chilli');
    expect(restaurant.allOrders()).toContain('spaghetti', 'pizza', 'chilli');
  })

  it('will add items cost to tell you the final price', function() {
    restaurant.addOrder('spaghetti');
    restaurant.addOrder('pizza');
    expect(restaurant.finalPrice()).toContain(5);
  })

})
