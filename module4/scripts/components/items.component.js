(function () {
  'use strict';
  angular.module('MenuApp')
  .component('items', {
    bindings : {

    },
    templateUrl : 'menu.items.template.html',
    controller : 'ItemsController as vm'
  });
})();
