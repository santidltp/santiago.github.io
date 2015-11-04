(function(){
	var portApp = angular.module('portApp',['ngRoute']);

	portApp.controller('infoController',['$scope', '$http', function($scope,$http){
	console.log("pollo")
		
		$http.get('experience.json').success(function(data){
			$scope.experience = data;
		});
	}]);
})();