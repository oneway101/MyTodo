'use strict';

angular.module('mytodoApp')
    .controller('Main.controller',function($scope,$firebaseArray) {
    var fireRef = new Firebase ("https://mytodo-angular.firebaseio.com/");
    $scope.todos = $firebaseArray(fireRef,$scope,'todos');
    $scope.todo = { task: '', complete: false};

    $scope.addTodo = function(){

    	$scope.todos.$add($scope.todo);
    	$scope.todo = { task: '', complete: false};
    };

    $scope.removeTodo = function(index){
    	$scope.todos.$remove(index, 1);
    };

    $scope.completeTodo = function(todo){
        todo.complete = true;
        $scope.todos.$save(todo);

    };


  });

angular.module('mytodoApp').service('Todolist',['$rootscope' function($rootscope){

});