
$(document).ready(function() {
  var restaurant = new Restaurant('Kates fancy restaurant');

  $('#takeaway-name').text(restaurant.getName());

  reloadAllOrders();

  $('#add-spaghetti').click(function() {
  restaurant.addOrder('spaghetti');
  restaurant.getPrice('spaghetti');
  reloadAllOrders();
  reloadTotalPrice();
})

$('#add-pizza').click(function() {
restaurant.addOrder('pizza');
restaurant.getPrice('pizza');
reloadAllOrders();
reloadTotalPrice();
})

$('#add-chilli').click(function() {
restaurant.addOrder('chilli');
restaurant.getPrice('chilli');
reloadAllOrders();
reloadTotalPrice();
})

function reloadAllOrders() {
  $('#placefill').text(restaurant.allOrders());
}

function reloadTotalPrice() {
  $('#placefill2').text("£" + restaurant.finalPrice());
}
})
