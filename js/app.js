(function(){
	var portApp = angular.module('portApp',['ngRoute']);
	var xp="https://raw.githubusercontent.com/santidltp/santidltp.github.io/AngularJS/js/experience.json"
	var tk="https://raw.githubusercontent.com/santidltp/santidltp.github.io/AngularJS/js/technologies.json"
	
	portApp.controller('experienceCTRL',['$scope', '$http', function($scope,$http){
		$http.get(xp).success(function(data){
			$scope.experience = data;
		})
	}]);

	portApp.controller('tech',['$scope','$html', function($scope,$html){
		$http.get(tk).success(function(data){
			$scope.technology = data;
		});
	}]);

})();