(function () {
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'CategoriesURL', 'MenuItemsURL'];

  function MenuDataService($http, CategoriesURL, MenuItemsURL) {
    var self = this;
    self.getAllCategories = getAllCategories;
    self.getItemsForCategory = getItemsForCategory;

    function getAllCategories() {
      var params = {
        method : 'GET',
        url : CategoriesURL
      };

      return $http(params).then(function (result) {
        return result.categories;
      }, function (error) {
        console.error(error);
      });
    }

    function getItemsForCategory(categoryShortName) {
      var params = {
        method : 'GET',
        url : MenuItemsURL
      };

      return $http(params).then(function (result) {
        return result.menu_items;
      }, function (error) {
        console.error(error);
      });
    }
  }
})();
