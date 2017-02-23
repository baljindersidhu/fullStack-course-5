(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfiguration);

  RoutesConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfiguration($stateProvider, $urlRouterProvider) {
    // if no address matches then redirect to home
    $urlRouterProvider.otherwise('/home');

    // define states
    // home states
    $stateProvider
    .state('home',{
      url : '/home',
      templateUrl : 'templates/home.template.html'
    })
    .state('categories',{
      url : '/categories',
      templateUrl : 'templates/menu.categories.view.template.html',
      controller: 'CategoriesController as vm',
      resolve : {
        categoriesData : ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('categories.items',{
      url : '/items/{category_short_name}',
      templateUrl : 'templates/menu.items.view.template.html',
      controller: 'ItemsController as vm',
      resolve : {
        itemsData : ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams['category_short_name']);
        }]
      }
    });
  }
})();
