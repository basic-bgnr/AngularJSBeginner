(function () {
	'use strict';

	angular.module('myFirstApp', [])
	       .controller('myFirstController', function($scope) {
			   $scope.name = "Bidit";
			   $scope.sayName = function(){
				   return "My name is Bidit Devkota";
			   }
	       });
}
)()

