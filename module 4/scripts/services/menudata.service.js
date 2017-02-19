(function () {
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'CategoriesURL', 'CategoryItemsURL'];
  function MenuDataService($http, CategoriesURL, CategoryItemsURL) {
    var self = this;
    self.getAllCategories = getAllCategories;
    self.getItemsForCategory = getItemsForCategory;

    function getAllCategories() {
      return $http({
        method: 'GET',
        url: CategoriesURL
      }).then(function (result) {
        return result.data;
      },function (error) {
        console.log(error);
      });
    }

    function getItemsForCategory(categoryShortName) {
      return $http({
        method : 'GET',
        url : CategoryItemsURL + categoryShortName,
      }).then(function (result) {
        return result.data;
      },function (error) {
        console.log(error);
      });
    }
  }
})();
