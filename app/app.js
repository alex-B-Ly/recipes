angular.module('recipesApp', ['ui.router', 'ui.bootstrap'])
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: '/landing/home/home.html'
      })
      .state('users',{
        url: '/users',
        templateUrl: '/landing/userchoose/userchoose.html'
      })
      .state('adduser',{
        url: '/adduser',
        templateUrl: '/landing/adduser/adduser.html'
      })
      .state('main',{
        url: '/main',
        templateUrl: '/main/main.html'
      })
      .state('browserecipes',{
        url: '/browserecipes',
        templateUrl: '/browse/browserecipes/browserecipes.html'
      })
      .state('managerecipes',{
        url: '/managerecipes',
        templateUrl: '/manage/managerecipes/managerecipes.html'
      });

    $locationProvider.html5Mode(true);
  });