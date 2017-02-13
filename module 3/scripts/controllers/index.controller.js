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
    self.invalidInput = false;
    self.searchSuggestions = [
      'chicken',
      'pepper',
      'noodles',
      'corn',
      'egg',
      'vegetables',
      'eggroll',
      'dumpling',
      'carrots',
      'mushroom',
      'fried'
    ];
    self.search = search;
    self.removeItem = removeItem;
    self.searchSuggestion = searchSuggestion;
    self.showErrorPanel = showErrorPanel;

    function search() {
      // clear list
      self.items = [];
      // reset flags
      self.showError = false;
      self.invalidInput = false ;
      // return if search value is invalid
      if(self.search_value == undefined || self.search_value.length === 0){
        self.invalidInput = true;
        self.showErrorPanel();
        return;
      }
      // start loader animation
      self.showLoader = true;
      self.searchService.getMatchedMenuItems(self.search_value).then(function (items) {
        // hide loader
        self.showLoader = false;
        // if items are null or empty then show error panel
        if(items == null || items.length === 0){
          self.showErrorPanel();
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

    function searchSuggestion(index) {
      self.search_value = self.searchSuggestions[index];
      self.search();
    }

    function showErrorPanel() {
      if(self.invalidInput){
        self.errorMessage = "Invalid Search Input";
      }else{
        self.errorMessage = "No results found."
      }
      self.showError = true;
    }
  }
})();
