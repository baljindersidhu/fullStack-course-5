(function () {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfiguration)

  RoutesConfiguration.$inject =  ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfiguration($stateProvider, $urlRouterProvider) {
    // if no URL matches then redirect to home
    $urlRouterProvider.otherwise('/')
    // define states for ui-router
    $stateProvider
    .state('home', {
      url : '/',
      templateUrl : 'templates/home.template.html'
    }) // home state definition ends here
    .state('home.categories', {
      url : 'categories',
      templateUrl : 'templates/categories.template.html',
      controller : 'CategoriesController as vm',
      resolve : {
        categories : ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    }) // categories state definition ends here
    .state('home.categories.items', {
      url : '/items/{itemName}',
      templateUrl : 'templates/items.template.html',
      controller : 'ItemsController as vm',
      resolve : {
        items : ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams['itemName']);
        }]
      }
    })// categories state definition ends here
  }
})();
