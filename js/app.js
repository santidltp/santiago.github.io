(function(){
	var portApp = angular.module('portApp',['ngRoute']);
	var xp="https://github.com/santidltp/santidltp.github.io/tree/master/json/experience.json"
	var tk="https://github.com/santidltp/santidltp.github.io/tree/master/json/technologies.json"
	var ic="https://github.com/santidltp/santidltp.github.io/tree/master/json/proIcons.json"
	var pj="https://github.com/santidltp/santidltp.github.io/tree/master/json/proInfo.json"
	
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

	portApp.controller('proCTRL',['$scope', '$http', function($scope,$http){
		$http.get(pj).success(function(data){
			$scope.projects = data;
		});
	}]);

})();