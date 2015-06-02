'use strict';

angular.module('mytodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.sortable',
  'firebase'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $stateProvider.state('taskHistory', {
      url:'/taskhistory',
      controller: 'TaskHistory.controller',
      templateUrl: '/app/main/taskHistory.html'
    });
  });


  angular.module('mytodoApp')
    .service('Todolist',['$firebaseArray','$rootscope', function($firebaseArray,$rootscope){
    
      return{
          var fireRef = new Firebase ("https://mytodo-angular.firebaseio.com/");
          var todos = $firebaseArray(fireRef);

          addTodo: function(todos){
            this.todos.$add(this.todo);
            this.todo = { task: '', complete: false};
          },

          removeTodo: function(index){
          this.todos.$remove(index, 1);
          },

          completeTodo: function(todo){
          todo.complete = true;
          this.todos.$save(todo);
          }

      }

}]);