'use strict';

angular.module('mytodoApp')
  .controller('Main.controller',function($scope,$firebaseArray) {
    var fireRef = new Firebase ("https://mytodo-angular.firebaseio.com/");
    $scope.todos = $firebaseArray(fireRef,$scope,'todos');
    $scope.todo = { name: '' }

    $scope.addTodo = function(){

    	$scope.todos.$add($scope.todo);
    	$scope.todo = { name: '' }
    };

    $scope.removeTodo = function(index){
    	$scope.todos.splice(index, 1);
    };


  });
