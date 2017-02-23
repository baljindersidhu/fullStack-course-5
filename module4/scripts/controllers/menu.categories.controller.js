(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categoriesData'];
  function CategoriesController(categoriesData) {
    var vm = this;
    vm.items = angular.copy(categoriesData);
  }
})();
