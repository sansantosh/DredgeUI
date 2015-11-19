(function () {
  'use strict';

  class MainCtrl {
    constructor($state, $scope, $rootScope) {

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
          console.log(toState.name);
          $scope.curstate = toState.name;
      })
    }
  }

  /**
   * @ngdoc object
   * @name dredge.controller:MainCtrl
   *
   * @description
   *
   */
  angular
    .module('dredge')
    .controller('MainCtrl', MainCtrl);
}());
