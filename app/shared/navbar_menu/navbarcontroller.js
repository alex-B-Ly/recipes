var app = angular.module('recipesApp');

app.controller('navbarController', ['$scope', '$location', '$http', function($scope, $location, $http){
	$scope.isCollapsed = true;

	$scope.logout = function(){
		$http({
			method: 'POST',
			url: '/logout'
		}).then(function(response){
			if(response.data === true){
				$location.path('home');
				console.log('user successfully logged out.');
			}
		})
	}
}]);