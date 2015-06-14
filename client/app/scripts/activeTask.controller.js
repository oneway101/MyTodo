angular.module('mytodoApp')
    .controller('activeTask.controller',function($scope,$firebaseArray,Todolist) {

        Todolist.getTodos()
            .then(function(todos) {
              $scope.todos = todos;
        });

        $scope.addTodo = function(todo){
        	Todolist.addTodo(todo);
        	$scope.todo = {task:""};
        };

        $scope.removeTodo = function(index){
          Todolist.removeTodo(index);
        };

        $scope.completedTodo = function(todo){
          Todolist.completedTodo(todo);
        };

        $scope.editTodo = function(todo){
          Todolist.editTodo(todo);
        };

        $scope.displayTime = function(todo){
          var todoDate = new moment(todo.date);
          var setDate = new moment(todo.date).add(7,'days');
          var currentDate = new moment();
          if (setDate <= currentDate){
            Todolist.expiredTodo(todo);
          }
          console.log(moment().format('h:mm:ss a'));
          return 'self-destructs '+ setDate.fromNow();
        }

  });