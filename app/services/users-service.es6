(function () {
  'use strict';

  class Users {
    constructor($http) {

        let vm = this;
        

        vm.getUsers = function(){
          return $http({
            method: 'GET',
            url: '/Users'
          }).then(function(response) {
              // this callback will be called asynchronously
              // when the response is available

              console.log(response);
              return response;
            },function(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };
        vm.model = {
            name: '',
            email: ''
        },

        vm.saveState = function () {
            sessionStorage.userService = angular.toJson(vm.model);
        },

        vm.restoreState = function () {
            vm.model = angular.fromJson(sessionStorage.userService);
        }
    }

    get() {
      return 'Users';
    }
  }

  /**
   * @ngdoc service
   * @name dredge.service:Users
   *
   * @description
   *
   */
  angular
    .module('dredge')
    .service('Users', Users);
}());
