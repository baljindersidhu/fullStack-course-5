(function () {
  'use strict';
  angular.module('MenuApp')
  .component('items', {
    bindings : {
      items: '<menuItems',
      category: '<category'
    },
    templateUrl : 'templates/menu.items.template.html'
  });
})();
