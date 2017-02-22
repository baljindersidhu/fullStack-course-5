(function () {
  'use strict';
  angular.module('data', [])
  .constant('CategoriesURL', 'https://davids-restaurant.herokuapp.com/categories.json')
  .constant('MenuItemsURL', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=')
})();
