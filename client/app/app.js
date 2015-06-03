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
    
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'app/templates/main.html',
        controller: 'activeTask.controller'
      });

    $stateProvider.state('taskHistory', {
      url:'/taskhistory',
      templateUrl: '/app/main/taskHistory.html',
      controller: 'TaskHistory.controller'
    });
  });


angular.module('mytodoApp')
  .service('Todolist',['$firebaseArray','$rootScope', function($firebaseArray,$rootScope){

    var fireRef = new Firebase ("https://mytodo-angular.firebaseio.com/");
    var todos = $firebaseArray(fireRef);

    return{

        addTodo: function(todos){
          this.todos.$add();
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