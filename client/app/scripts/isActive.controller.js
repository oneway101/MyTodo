angular.module('mytodoApp')
	.controller('isActive.controller', function($scope,$location){

		$scope.isActive = function (viewLocation) {
		    return viewLocation === $location.path();
		};

	});