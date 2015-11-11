(function(){
	var portApp = angular.module('portApp',['ngRoute']);
	var xp="https://raw.githubusercontent.com/santidltp/santidltp.github.io/AngularJS/js/experience.json"
	var tk="https://raw.githubusercontent.com/santidltp/santidltp.github.io/AngularJS/js/technologies.json"
	var ic="https://raw.githubusercontent.com/santidltp/santidltp.github.io/AngularJS/js/proIcons.json"
	
	portApp.controller('experienceCTRL',['$scope', '$http', function($scope,$http){
		$http.get(xp).success(function(data){
			$scope.experience = data;
		});
	}]);

	portApp.controller('techCTRL',['$scope', '$http', function($scope,$http){
		$http.get(tk).success(function(data){
			$scope.technology = data;
		});
	}]);

	portApp.controller('icoCTRL',['$scope', '$http', function($scope,$http){
		$http.get(ic).success(function(data){
			$scope.icons = data;
		});
	}]);

})();