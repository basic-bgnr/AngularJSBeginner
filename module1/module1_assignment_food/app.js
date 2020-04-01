(function(){ 
	angular.module("Module1Assignment", [])
	       .controller("AssignmentController",  function($scope){        
		$scope.input = ""
		$scope.output = ""
		$scope.color = "blue"

		$scope.onClick = function() {
			let checker = (string) =>{ 
					let args = string.trim().split(",")
				        if (string == "" ) {
						$scope.output ="enter data first"
			                        $scope.color = "#ca1018"//red
						return 
					}
			                $scope.color = "#56ca10"//green
				        if (args.length <= 3){
						$scope.output = "enjoy !!" 
						return 
					}
				        if (args.length > 3) $scope.output = "too much!!!!" 

			}
			checker($scope.input)
		}
	      })
})()
