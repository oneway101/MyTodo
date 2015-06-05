angular.module('mytodoApp')
    .controller('activeTask.controller',function($scope,$firebaseArray,Todolist) {
        $scope.todo = {task:"", completed:false};

        Todolist.getTodos()
            .then(function(todos) {
              $scope.todos = todos;
        });

        $scope.addTodo = function(todo){
        	Todolist.addTodo(todo);
        	$scope.todo = {task:"", completed:false};
        };

        $scope.removeTodo = function(index){
          Todolist.removeTodo(index);
        };

        $scope.completedTodo = function(todo){
          Todolist.completedTodo(todo);
        };
  });