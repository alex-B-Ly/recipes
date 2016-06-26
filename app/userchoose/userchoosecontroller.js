var app = angular.module('recipesApp');

app.controller('userChooseController', ['$scope', '$http', function($scope, $http){
	$scope.userList = [];

	$http({
		method: 'POST',
		url: '/usercheck'
	}).then(function(users){
		$scope.userList = users.data;
	});
}]);