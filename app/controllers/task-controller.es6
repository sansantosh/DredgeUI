(function () {
  'use strict';

  class TaskCtrl {
    constructor() {
      let vm = this;
      vm.ctrlName = 'TaskCtrl';
    }
  }

  /**
   * @ngdoc object
   * @name dredge.controller:TaskCtrl
   *
   * @description
   *
   */
  angular
    .module('dredge')
    .controller('TaskCtrl', TaskCtrl);
}());
