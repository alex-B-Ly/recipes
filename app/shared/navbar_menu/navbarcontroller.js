var app = angular.module('recipesApp');

app.controller('navbarController', ['$scope' , function($scope){
	$scope.isCollapsed = true;
}]);