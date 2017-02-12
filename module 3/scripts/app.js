(function () {
  'use strict';

  // declare app
  angular.module('NarrowItDownApp', [])

  // declaring the service for fecthing list of items
  .factory('MenuSearchService', MenuSearchService)
  // declaring rest url constant on global scope
  .constant('RESTUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json')

  // injecting dependencies on factory
  MenuSearchService.$inject = ['$http', 'RESTUrl'];

  // factory definition for fetching remote list
  function MenuSearchService($http, RESTUrl) {
    var searchService = function () {
      var self = this;
      self.getMatchedMenuItems = getMatchedMenuItems;

      function getMatchedMenuItems(searchTerm) {
        var search_term = searchTerm;
        return $http({
          method: 'GET',
          url: RESTUrl})
        .then(function (result) {
          // filter items based on searchTerm
          var menu_items = result.data.menu_items;
          var matched_items = [];
          angular.forEach(menu_items, function (item) {
            if(item.description.indexOf(search_term) !== -1){
              matched_items.push(item);
            }
          });
          return matched_items;
        });
      }
    }

    var callback = function () {
      return new searchService();
    }
    return callback;
  }
})();
