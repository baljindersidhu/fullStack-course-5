(function () {
  'use strict';

  angular.module('NarrowItDownApp')
  .controller('NarrowItDownController', NarrowItDownController)

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var self = this;
    self.showError = false;
    self.showLoader = false;
    self.searchService = MenuSearchService();
    self.search_value = "";
    self.items = [];
    self.search = search;
    self.removeItem = removeItem;

    function search() {
      self.items = [];
      self.showError = false;
      self.showLoader = true;
      self.searchService.getMatchedMenuItems(self.search_value).then(function (items) {
        self.showLoader = false;
        if(items == null || items.length === 0){
          self.showError = true;
        }
        self.items = items;
      },function (error) {
        self.showError = true;
        console.log('Error fetching Results');
      });
    }

    function removeItem(index) {
      self.items.splice(index,1);
    }
  }
})();
