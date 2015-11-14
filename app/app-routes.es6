(function () {
  'use strict';

  angular
    .module('dredge')
    .config(config);

  function config($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('task', {
        url: '/task',
        templateUrl: '/views/task.tpl.html',
        controller: 'TaskCtrl',
        controllerAs: 'task'
      });
    $urlRouterProvider.otherwise('/home');
  }
}());
