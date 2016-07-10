var app = angular.module('recipesApp');

app.controller('mainController', function(){

})
.directive('navbarMenu', function(){
	return {
		templateUrl: '../shared/navbar_menu/navbarmenu.html'
	}
});