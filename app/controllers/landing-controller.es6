(function () {
  'use strict';

  class LandingCtrl {
    constructor($scope) {

      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      var slides = $scope.slides = [];
      $scope.addSlide = function() {
        var newWidth = slides.length + 1;
        slides.push({
          image: './images/img' + newWidth+'.jpg',
          text: ['Is all about abˈstrakSH(ə)n',
                 'A declarative, abstraction layer for intregating data tool, enabling loosely coupled big data platform','Plug n Play','Event driven dependencies'][slides.length % 4]
        });
      };
      for (var i=0; i<4; i++) {
        $scope.addSlide();
      }
    }
  }

  /**
   * @ngdoc object
   * @name dredge.controller:LandingCtrl
   *
   * @description
   *
   */
  angular
    .module('dredge')
    .controller('LandingCtrl', LandingCtrl);
}());
