(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var vm = this;
    vm.category = items.category;
    vm.items = items.menu_items;
  }
})();
