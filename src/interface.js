
$(document).ready(function() {
  var restaurant = new Restaurant('Kates fancy restaurant');

  $('#takeaway-name').text(restaurant.getName());

  reloadAllOrders();

  $('#add-spaghetti').click(function() {
  restaurant.addOrder('spaghetti');
  reloadAllOrders();
})

$('#add-pizza').click(function() {
restaurant.addOrder('pizza');
reloadAllOrders();
})

$('#add-chilli').click(function() {
restaurant.addOrder('chilli');
reloadAllOrders();
})

function reloadAllOrders() {
  $('#placefill').text(restaurant.allOrders());
}
})
