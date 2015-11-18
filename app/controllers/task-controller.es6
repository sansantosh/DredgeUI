(function () {
  'use strict';

  class TaskCtrl {
    constructor(Users) {
      let vm = this;
      let test = Users.getUsers();
      console.log(Users);
      vm.ctrlName = 'TaskCtrl';
      vm.selectedComponents = [];
      vm.isComponentVisible = false;
      vm.componentList = [
        {id:'comp1',type:'test'},
        {id:'comp2', type:'test2'},
        {id:'comp3', type:'test'}, 
        {id:'comp4', type:'test1'},
        {id:'comp5', type:'test'}, 
        {id:'comp6', type:'test2'}, 
        {id:'comp7', type:'test1'}, 
        {id:'comp8', type:'test2'},
        {id:'comp9', type:'test1'},
        {id:'comp10', type:'test2'}, 
        {id:'comp11', type:'test1'},
        {id:'comp12', type: 'test'}
      ];
      vm.showComponents = function () {
        vm.isComponentVisible = !vm.isComponentVisible;
      };
      vm.example1model = [];
      vm.example1data = [{id: 1, label: 'David'}, {id: 2, label: 'Jhon'}, {id: 3, label: 'Danny'}];
      vm.example11model = []; 
      vm.example11data = [
        {id: 1, label: "David", gender: 'M'}, 
        {id: 2, label: "Jhon", gender: 'M'}, 
        {id: 3, label: "Lisa", gender: 'F'}, 
        {id: 4, label: "Nicole", gender: 'F'}, 
        {id: 5, label: "Danny", gender: 'M'}
      ]; 
      vm.example11settings = {
        groupByTextProvider: function(groupValue) { 
          if (groupValue === 'M') { 
            return 'Male'; 
          } 
          else { 
            return 'Female'; 
          }
        }
      };
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
