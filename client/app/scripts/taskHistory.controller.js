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
      };

      $scope.displayTime = function(todo){
          var time = todo.date;
          
          if(todo.completed == true){
            return 'Completed ' + moment(time).fromNow();
          }
          else{
            return 'Expired ' + moment(time).fromNow();
          };
      };

	});