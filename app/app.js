angular.module('recipes', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    // $stateProvider
    //   .state('home',{
    //     url: '/',
    //     templateUrl: ''
    //   });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });