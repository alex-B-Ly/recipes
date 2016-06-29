angular.module('recipesApp', ['ui.router', 'ui.bootstrap'])
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: '/home/home.html'
      })
      .state('users',{
        url: '/users',
        templateUrl: '/userchoose/userchoose.html'
      })
      .state('adduser',{
        url: '/adduser',
        templateUrl: '/adduser/adduser.html'
      });

    $locationProvider.html5Mode(true);
  });