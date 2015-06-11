angular.module('mytodoApp')
	.controller('isActive.controller', function($scope,$location){

		$scope.isActive = function (viewLocation) {
			//console.log($location.path());
		    return viewLocation === $location.path();
		    //return viewLocation.toLowerCase() === $location.path().toLowerCase();
		};

	});