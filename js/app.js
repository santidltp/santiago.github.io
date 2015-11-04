(function(){
	var portApp = angular.module('portApp',['ngRoute']);
	console.log("pollo")
	portApp.controller('experienceCTRL',['$scope', '$http', function($scope,$http){
		$http.get('experience.json').success(function(data){
			$scope.experience = data;
		})
	}]);
})();