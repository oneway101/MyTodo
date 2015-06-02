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
      /*controller: 'TaskHistory.controller',*/
      templateUrl: '/app/main/taskHistory.html'
    });
  });