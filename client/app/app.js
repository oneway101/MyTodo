'use strict';

angular.module('mytodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.sortable',
  'firebase',
  'ngAnimate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    
    $stateProvider.state('activeTasks', {
        url: '/',
        templateUrl: 'app/templates/main.html',
        controller: 'activeTask.controller'
      });

    $stateProvider.state('taskHistory', {
      url:'/taskHistory',
      templateUrl: '/app/templates/taskHistory.html',
      controller: 'TaskHistory.controller'
    });
  });


angular.module('mytodoApp')
  .service('Todolist',['$firebaseArray','$rootScope', function($firebaseArray,$rootScope){

    var fireRef = new Firebase ("https://mytodo-angular.firebaseio.com/");
    var todos = $firebaseArray(fireRef);

    return{
        getTodos: function(){
          return todos.$loaded();
        },

        addTodo: function(todo){
          todos.$add({
            task: todo.task,
            date: Firebase.ServerValue.TIMESTAMP,
            completed: false,
            expired: false
          });
          todos.$save(todo);
        },

        editTodo: function(todo){
          todos.$save(todo);
        },

        removeTodo: function(index){
          todos.$remove(index, 1);
        },

        completedTodo: function(todo){
          todo.completed = true;
          todo.date = Firebase.ServerValue.TIMESTAMP;
          todos.$save(todo);
        },

        expiredTodo: function(todo){
          if (todo.completed == true){
            todo.expired = false;
          }
          else{
            todo.expired = true;
            todo.date = Firebase.ServerValue.TIMESTAMP; 
          }
          todos.$save(todo);
        }
    }

}]);