(function () {
  'use strict';

  class LoginCtrl {
    constructor() {
      let vm = this;
      vm.ctrlName = 'LoginCtrl';



      vm.myInterval = 5000;
      vm.noWrapSlides = false;
      var slides = vm.slides = [];
      vm.addSlide = function() {
        var newWidth = slides.length + 1;
        slides.push({
          image: './images/img' + newWidth+'.jpg',
          text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
      };
      for (var i=0; i<4; i++) {
        vm.addSlide();
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
