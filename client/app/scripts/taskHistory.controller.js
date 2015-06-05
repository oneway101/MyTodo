angular.module('mytodoApp')
	.controller('TaskHistory.controller', function($scope,$firebaseArray,Todolist){
		Todolist.getTodos()
            .then(function(todos) {
              $scope.todos = todos;
        });

    	$scope.removeTodo = function(index){
        	Todolist.removeTodo(index);
        };

        $scope.incompleteTodo = function(todo){
        	Todolist.incompleteTodo(todo);
        }

	});