
angular.module('mytodoApp')
    .controller('activeTask.controller',function($scope,$firebaseArray,Todolist) {
        $scope.addTodo = Todolist.addTodo();

  });