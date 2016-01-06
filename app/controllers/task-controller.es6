(function () {
  'use strict';

  class TaskCtrl {
    constructor(Users, Task, $scope) {

      let taskPriorityList = [{'id':'P1'},{'id':'P2'},{'id':'P3'},{'id':'P4'},{'id':'P5'},{'id':'Critical'}];
      let taskStatus = [{'label': 'Y'}, {'label': 'N'}];
      let pipeLineMode = [{'label' : 'All'}, {'label' :'Steps'}];

      let chunk = function(arr, size) {
        var newArr = [];
        for (var i=0; i<arr.length; i+=size) {
          newArr.push(arr.slice(i, i+size));
        }
        return newArr;
      }

      $scope.ctrlName = 'TaskCtrl';
      $scope.task ={};
      $scope.task.path = "/Users/hgandhi/Desktop/All/DredgeData/"
      $scope.pipeline = {};
      $scope.numOfPipelines = 1;
      $scope.taskId = '';
      $scope.pipeLineId = '';
    
      $scope.selectedComponentList = [];
      $scope.isComponentVisible = false;
      $scope.isPipelineVisible = false;
      $scope.componentSelected = false;
      $scope.selectedCompName = "";
      $scope.isAddParmVisible = false;
      $scope.newParms = {};

      $scope.clist = [
        {name:'comp1',type:'test'},
        {name:'comp2',type:'test'},
        {name:'comp3',type:'test'},
        {name:'comp4', type:'test'}, 
        {name:'comp5', type:'test1'}
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

      $scope.getComponentList = function(){

        let id = $scope.pipeline.type.dredge_component_type_id;
        Task.getComponentList(id).then(function(response){
          $scope.componentList =  chunk(response.data, 3);
        });
      };

      $scope.savePipeline = function () {
        let obj = $scope.pipeline;
          obj.parentTaskId = $scope.taskId;
        Task.savePipeLine(obj, $scope.numOfPipelines).then(function(response){
          $scope.pipeLineId = response.data.split(": ").pop() * 1;
          $scope.numOfPipelines ++;
        });


        $scope.isComponentVisible = !$scope.isComponentVisible;
      };

      $scope.saveTask = function (){
          // need to remove
          // $scope.isPipelineVisible = !$scope.isPipelineVisible;
          // $scope.isComponentVisible = false;
        Task.saveTask($scope.task).then(function(response){
          $scope.isPipelineVisible = !$scope.isPipelineVisible;
          $scope.isComponentVisible = false;
          $scope.taskId = response.data.split(": ").pop() * 1;
        });
      };

      $scope.selectComp = function(idx, evt){
      
        $(evt.target).parents('.component-list').addClass('selected');
        $(evt.target).parent('ul').addClass('selected');
        //$(evt.target).addClass('selected');

        $scope.componentSelected = true;
        $scope.selectedComponent = this.item;

        Task.getComponentParm(this.item).then(function(response){

            $scope.componentParms = response.data
        });

      };

      $scope.cancleSelection = function(evt){
          $scope.reset(evt.target);
      };

      $scope.addComponent = function(evt){

        let componentIndex = $scope.selectedComponentList.length + 1;
        let taskId = $scope.taskId;
        let pipelineId = $scope.pipeLineId;
        let componentList = angular.copy($scope.componentParms);

        // to be removed 
         _.each(componentList, function(obj, idx){

            if(obj.dredge_component_parameter_id){
              obj.fk_dredge_component_parameter_id = obj.dredge_component_parameter_id;
            }
            else{
              obj.fk_dredge_component_parameter_id = -99;
            }
            //from above
            obj.task_pipeline_id = pipelineId;
            //from above
            obj.task_pipeline_component_id = componentIndex;
            // index
            obj.task_pipeline_component_parameter_id = idx + 1;
         });

        Task.saveComponent(componentIndex, taskId, pipelineId, $scope.selectedComponent, componentList).then(function(response){
          $scope.selectedComponent.selected = "added";
          $scope.reset(evt.target);
          $scope.selectedComponent.id = response.data.split(": ").pop() * 1;
          $scope.selectedComponentList.push($scope.selectedComponent);
        });
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

      $scope.showAddParms = function(){
          $scope.isAddParmVisible = true;
      };

      $scope.addParms = function(){
        $scope.newParms.id = -99;
        $scope.isAddParmVisible = false;
        $scope.componentParms.push(angular.copy($scope.newParms));
        $scope.newParms = {};
      };

      $scope.cancelAddParms = function(){
        $scope.isAddParmVisible = false;
        
      };

      $scope.sortableOptions = {
   
           stop: function(e, ui) {
            // this callback has the changed model

            let newList = $scope.newComponentList.map(function(i){
              return {
                idx : i.idx,
                id : i.id
              }
            });

            //call service to update 

            console.log(newList);
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
