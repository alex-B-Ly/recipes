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
}])
.directive('compareTo', function(){
	return {
    require: "ngModel",
    scope: {
      otherModelValue: "=compareTo"
    },
    link: function(scope, element, attributes, ngModel) {
       
      ngModel.$validators.compareTo = function(modelValue) {
        return modelValue == scope.otherModelValue;
      };

      scope.$watch("otherModelValue", function() {
        ngModel.$validate();
      });
    }
  };
});