(function () {
  'use strict';

  class TaskCtrl {
    constructor(Users, Task, $scope) {

      let taskPriorityList = [{'id':'P1'},{'id':'P2'},{'id':'P3'},{'id':'P4'},{'id':'P5'},{'id':'Critical'}];
      let taskStatus = [{'label': 'Y'}, {'label': 'N'}];
      let pipeLineMode = [{'label' : 'All'}, {'label' :'Steps'}];

      $scope.ctrlName = 'TaskCtrl';
      $scope.task ={};
      $scope.pipeline = {};
    
      $scope.selectedComponents = [];
      $scope.isComponentVisible = false;
      $scope.isPipelineVisible = false;
      $scope.componentSelected = false;
      $scope.selectedCompName = "";

      $scope.componentList = [
        {id:'comp1',type:'test'},
        {id:'comp1',type:'test'},
        {id:'comp1',type:'test'},
        {id:'comp2', type:'test2'},
        {id:'comp3', type:'test'}, 
        {id:'comp4', type:'test1'},
        {id:'comp5', type:'test'}, 
        {id:'comp6', type:'test2'}, 
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

      //initialization
      //initialization
      //initialization
      Task.getTaskType().then(function(response){
        $scope.task.taskTypes = response.data;
        $scope.task.priorityList = taskPriorityList;
        $scope.task.statusList = taskStatus;
      });
      Task.getComponentType().then(function(response){
        $scope.pipeline.componentTypes = response.data;
      });
      Task.getAbstractionType().then(function(response){
        $scope.pipeline.abstractionTypes = response.data;
        $scope.pipeline.modes = pipeLineMode;
      });

      
      $scope.showComponents = function () {
        $scope.isComponentVisible = !$scope.isComponentVisible;
      };

      $scope.saveTask = function (){
          // need to remove
          $scope.isPipelineVisible = !$scope.isPipelineVisible;
          $scope.isComponentVisible = false;
        Task.saveTask($scope.task).then(function(response){
          //$scope.isPipelineVisible = !$scope.isPipelineVisible;
          //$scope.isComponentVisible = false;
        });
         
        
      };

      $scope.selectComp = function(idx, evt){
      
        $(evt.target).parents('.component-list').addClass('selected');
        $(evt.target).parent('ul').addClass('selected');
        //$(evt.target).addClass('selected');

        $scope.componentSelected = true;
        $scope.selectedCompName = this.item.id;
        $scope.selectedCompEl = $(evt.target);
      };

      $scope.cancleSelection = function(evt){
          $scope.reset(evt.target);
      };

      $scope.addComponent = function(evt){
        $scope.selectedCompEl.addClass('added');
        $scope.reset(evt.target);
      };

      $scope.reset = function(el){

        $(el)
        .parents('.component-list').removeClass('selected')
        .children('ul.selected').removeClass('selected')
        .children('li.selected').removeClass('selected');

        $scope.componentSelected = false;
        $scope.selectedCompName = "";
      };

      $scope.deselect = function(evt){
        $scope.selectedCompEl.removeClass('added');
        $scope.reset(evt.target);
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
