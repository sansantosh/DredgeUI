(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name dredge.directive:fancyButton
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="dredge">
       <file name="index.html">
        <fancy-button></fancy-button>
       </file>
     </example>
   *
   */
  angular
    .module('dredge')
    .directive('fancyButton', fancyButton);

  function fancyButton() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'directives/fancy-button-directive.tpl.html',
      replace: false,
      controllerAs: 'fancyButton',
      controller() {
        let vm = this;
        vm.name = 'fancyButton';
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
