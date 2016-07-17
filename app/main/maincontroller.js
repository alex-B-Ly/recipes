var app = angular.module('recipesApp');

app.controller('mainController', ['$scope', '$http', '$location', function($scope, $http, $location){

	$scope.userCheck = function(){
		$http({
			url: '/auth-check',
			method: 'POST'
		}).then(function(check){
			if(check.data === true){
				$location.path('browserecipes');
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