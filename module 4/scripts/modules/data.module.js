(function () {
  'use strict';
  angular.module('data', [])
  .constant('CategoriesURL', 'https://davids-restaurant.herokuapp.com/categories.json')
  .constant('CategoryItemsURL', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=')
})();
