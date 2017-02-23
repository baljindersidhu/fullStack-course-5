(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    bindings : {
      items : '<menuCategories'
    },
    templateUrl : 'templates/categories.template.html'
  });
})();
