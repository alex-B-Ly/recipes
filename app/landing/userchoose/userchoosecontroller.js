var app = angular.module('recipesApp');

app.controller('userChooseController', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.userList = [];
	$scope.userChosen = false;

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

  $scope.chooseUser = function(){
  	$scope.chosenUser = this.user;
  	$scope.userChosen = true;
  }

  $scope.userChooseLogin = function(){
  	$scope.userchoose.username = $scope.chosenUser;

  	$http({
  		method: 'POST',
  		url: '/userlogin',
  		data: $scope.userchoose
  	}).then(function(response){
  		console.log(response.data);
  		if(response.data.success){
				$scope.loginfail = false;
        $location.path('main');
  		}else{
  			$scope.loginfail = true;
  		}
  	});
  }

}]);