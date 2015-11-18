(function () {
  'use strict';

  class Routes {
    constructor() {

      let vm = this;

      this.resolveRoute = function(){

        console.log("hello");
      }
    }

    get() {
      return 'Routes';
    }
  }

  /**
   * @ngdoc service
   * @name dredge.service:Routes
   *
   * @description
   *
   */
  angular
    .module('dredge')
    .service('Routes', Routes);
}());
