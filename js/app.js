(function(){
	var portApp = angular.module('portApp',['ngRoute']);
	var pollo="https://raw.githubusercontent.com/santidltp/santidltp.github.io/AngularJS/js/experience.json"
		
		portApp.controller('experienceCTRL',['$scope', '$http', function($scope,$http){
		$http.get(pollo).success(function(data){
			$scope.experience = data;
			console.log(data)
		})
	}]);
		portApp.controller('tech',['$scope','$html', function($scope,$html){
			
		}]);
})();