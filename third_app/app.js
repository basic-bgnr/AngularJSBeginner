(function () {
		'use strict' 
		angular.module('MainApp', [])
		       .controller('MainController', function ($scope) {
			       
			       $scope.name = "dynamic name" 

			       $scope.input_value = "" 
				   $scope.calculated_value = 0 
				   
			       $scope.changeValue = function() {  
					function calculate(string) { 
							let sum = 0
							for(let i=0;i<string.length;i++){ 
								sum += string.charCodeAt(i)
							}
							$scope.calculated_value = sum 
					}
				       calculate($scope.input_value)
			       }

	})
}
) ()

