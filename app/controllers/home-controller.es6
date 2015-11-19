(function () {
  'use strict';

  class HomeCtrl {
    constructor($timeout, Users) {
      let vm = this;
      vm.ctrlName = 'HomeCtrl';
    }
  }

  /**
   * @ngdoc object
   * @name dredge.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('dredge')
    .controller('HomeCtrl', HomeCtrl);
}());
