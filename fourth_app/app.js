(function () {
	angular.module('FourthApp', [])
	       .controller('FourthController', function($scope){
		       $scope.button_value = false
		       $scope.input = ''

		       $scope.changeCase = function(){ 
			       (function(string) {
				       $scope.input = string.toUpperCase()
			       })($scope.input)
		       }
		       $scope.onClick = function(){
			       $scope.button_value = !$scope.button_value
		       }

	       })
}) ()    
