(function () {

    'use strict';

    // defining module
    const app = angular.module('testApp', [])

    // declaring constrollers
    app.controller('pendingItemsController', ListofitemsToBuyController);
    app.controller('boughtItemsController', ListofitemsAlreadyBoughtController);
    app.controller('progressController', progressController);

    // declaring services
    app.service('ShoppingList', ShoppingListService);

    // dependency injection of services in controllers
    ListofitemsToBuyController.$inject = ['ShoppingList'];
    ListofitemsAlreadyBoughtController.$inject = ['ShoppingList'];
    progressController.$inject = ['ShoppingList'];

    // defining service
    function ShoppingListService(){
      var self = this;

      self.items_bought = [];
      // initialize progress at 0
      self.progressControls = {
        progress : 0
      };

      // return current progress
      self.getProgressControls = function () {
        return self.progressControls;
      }

      // remove item from List of To_Buy items and add to List of already Bought Items
      self.buyItem = function(index){
        var item = self.items_toBuy[index];
        self.items_bought.push(item);
        self.items_toBuy.splice(index, 1);
        self.progressControls.progress += 10;
      };

      // remove item from List of Already bought items and add to List of To_Buy items
      self.removeFromBought = function(index){
        var item = self.items_bought[index];
        self.items_toBuy.push(item);
        self.items_bought.splice(index, 1);
        self.progressControls.progress -=10;
      };

      // return list of items To_Buy
      self.getItemsToBuy = function () {
        return self.items_toBuy;
      };

      // return list of items already bought
      self.getItemsBought = function () {
        return self.items_bought;
      }

      // define list of items To_Buy
      self.items_toBuy = [
        {
          name : 'Carrots',
          count : '1kg'
        },
        {
          name : 'Oranges',
          count : '1kg'
        },
        {
          name : 'Mushrooms',
          count : '3 packets'
        },
        {
          name : 'Corn Flakes',
          count : '2 packets'
        },
        {
          name : 'Pineapple Juice',
          count : '3 cans'
        },
        {
          name : 'Apples',
          count : '2 kg'
        },
        {
          name : 'Beans',
          count : '1/2 kg'
        },
        {
          name : 'Music CDs',
          count : '2'
        },
        {
          name : 'Brownies',
          count : '5 packets'
        },
        {
          name : 'Gachakk',
          count : '1 packet'
        },
      ];

    }

    // defining progressController
    function progressController(ShoppingList) {
      var progressCtrl = this;
      this.progressControls = ShoppingList.getProgressControls();
    }
    // defining ListofitemsToBuyController
    function ListofitemsToBuyController(ShoppingList) {
      var toBuy = this;
      toBuy.items = ShoppingList.getItemsToBuy();
      toBuy.buyItem = function(index){
        ShoppingList.buyItem(index);
      };
    }

    // defining ListofitemsAlreadyBoughtController
    function ListofitemsAlreadyBoughtController(ShoppingList) {
      var bought = this;

      bought.items = ShoppingList.getItemsBought();
      bought.removeItem = function (index) {
        ShoppingList.removeFromBought(index);
      }
    }
})();
