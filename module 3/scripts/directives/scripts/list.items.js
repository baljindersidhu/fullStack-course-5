(function () {
  'use strict';

  angular.module('NarrowItDownApp')
  .directive('foundItems', ItemsListDirective)

  function ItemsListDirective() {
    return {
      restrict : 'E',
      scope : {
        items : '<foundItems',
        removeItem : '&onRemove'
      },
      templateUrl : '/scripts/directives/templates/found.items.html'
    };
  }
})();
