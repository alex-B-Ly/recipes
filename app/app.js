angular.module('recipesApp', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: '/home/home.html'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });