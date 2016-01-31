title = 'Shopping List';
d3.select('title').html(title);
d3.select('body').append('h1').html(title);

function print_array(array) {
  var ol = d3.select('body').append('ol');
  array.forEach(function(item, index, array) {
    ol.append('li').html(item);
    console.log(item, index);
  });
}

shopping_list = ["eggs", "milk", "cheese", "bacon"];
print_array(shopping_list)