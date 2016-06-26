var app = angular.module('recipesApp');

app.controller('newUserController', ['$scope', '$http', '$location', function($scope, $http, $location){

	$scope.addUser = function(){
		console.log('New User: ',$scope.user);
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
    require: 'ngModel',
    scope: {
      otherModelValue: '=compareTo'
    },
    link: function(scope, element, attributes, ngModel) {
       
      ngModel.$validators.compareTo = function(modelValue) {
        return modelValue == scope.otherModelValue;
      };

      scope.$watch('otherModelValue', function() {
        ngModel.$validate();
      });
    }
  };
})
.directive('userCheck',['$http', function($http){
	return {
		require: 'ngModel',
		link: function(scope, element, attributes, ctrl){

			$http({
				method: 'POST',
				url: '/usercheck'
			}).then(function(res){
				scope.nameArr = res.data;
			});

			element.on('keyup', function(){
				for(var i=0, len=scope.nameArr.length; i<len; i++){
					if(ctrl.$viewValue.toLowerCase() === scope.nameArr[i].toLowerCase()){
						scope.userForm.user.$setValidity('userCheck', false);
						return;
					}else{
						scope.userForm.user.$setValidity('userCheck', true);
					}
				}
			});
		}
	}
}]);