(function () {
	'use strict';

	angular.module('NameCalculator', [])
	       .controller('NameCalculatorController', function ($scope) {
		       $scope.name = "";
		       $scope.totalValue = 0;

		       $scope.calculateName = function (){
			       $scope.totalValue = getNameValue($scope.name);
		       }

		       function getNameValue(string){
			       let sum = 0;
			       for(let i = 0; i<string.length; i++){
				       sum += string.charCodeAt(i);
			       }
			       return sum;
		       }
	       });
}
)()

