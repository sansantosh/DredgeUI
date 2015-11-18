(function () {
  'use strict';

  const INIT = new WeakMap();
  const SERVICE = new WeakMap();
  const TIMEOUT = new WeakMap();

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
