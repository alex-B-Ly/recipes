var app = angular.module('recipesApp');

app.controller('userChooseController', ['$scope', '$http', function($scope, $http){
	$scope.userList = [];

	$http({
		method: 'POST',
		url: '/usercheck'
	}).then(function(users){
		$scope.userList = users.data;
	});

	$scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

}]);