(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['itemsData'];
  function ItemsController(itemsData) {
    var vm = this;
    vm.menu_items = itemsData.menu_items;
    vm.category = itemsData.category;
  }
})();
