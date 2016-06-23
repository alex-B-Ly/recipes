var app = angular.module('recipesApp');

app.controller('newUserController', ['$scope', '$http', function($scope, $http){

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
	}
}]);