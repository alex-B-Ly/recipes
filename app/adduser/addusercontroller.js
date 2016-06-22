var app = angular.module('recipesApp');

app.controller('newUserController', ['$scope', function($scope){
	// $scope.user;

	$scope.addUser = function(){
		console.log($scope.user);
		// TODO Pass user info into db
		$scope.user = {}
		$scope.user = undefined;
	}
}]);