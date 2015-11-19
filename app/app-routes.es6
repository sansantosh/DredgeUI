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
        controllerAs: 'home',
        promiseObj:  function(Route){
            return 
         },
      })
      .state('task', {
        url: '/task',
        templateUrl: '/views/task.tpl.html',
        controller: 'TaskCtrl',
        controllerAs: 'task',
        promiseObj:  function(Route){
            return 
         },
      })
      .state('login', {
        url: '/login',
        templateUrl: '/views/login.tpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .state('landing', {
        url: '/landing',
        templateUrl: '/views/landing.tpl.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      });
    $urlRouterProvider.otherwise('/landing');
  }
}());
