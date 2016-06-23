var app = angular.module('recipesApp');

app.controller('newUserController', ['$scope', '$http', '$location', function($scope, $http, $location){

	$scope.addUser = function(){
		console.log($scope.user);
		// TODO Pass user info into db
		$http({
			method: 'POST',
			url: '/newuser',
			data: $scope.user
		});

		$scope.user = {}
		$scope.user = undefined;

		$location.path('home');
	}
}]);