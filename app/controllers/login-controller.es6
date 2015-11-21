(function () {
  'use strict';

  class LoginCtrl {
    constructor($scope, $state) {
    
      let user = { 
          id : 'john',
          password : 'dredge'
        };
        console.log('test');
      $scope.isError = false;
      $scope.submit = function(){

        if($scope.user.username === user.id && $scope.user.password === user.password){
          $state.go('task');
        }
      
      }
    }
  }

  /**
   * @ngdoc object
   * @name dredge.controller:LoginCtrl
   *
   * @description
   *
   */
  angular
    .module('dredge')
    .controller('LoginCtrl', LoginCtrl);
}());
