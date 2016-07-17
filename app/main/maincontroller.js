var app = angular.module('recipesApp');

app.controller('mainController', ['$scope', '$http', '$location', function($scope, $http, $location){

	$scope.authCheck = function(locPath){
		$http({
			url: '/auth-check',
			method: 'POST'
		}).then(function(check){
			if(check.data === true){
				$location.path(locPath);
			}else{
				$location.path('/');
			}
		});
	}

}])
.directive('navbarMenu', function(){
	return {
		templateUrl: '../shared/navbar_menu/navbarmenu.html'
	}
});