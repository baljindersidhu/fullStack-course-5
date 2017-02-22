(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories) {
    var vm = this;
    vm.items = angular.copy(categories);
  }
})();
