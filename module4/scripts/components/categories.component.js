(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    bindings : {
      items : '<categories'
    },
    templateUrl : 'templates/categories.template.html',
    controller : 'CategoriesController as vm'
  });
})();
