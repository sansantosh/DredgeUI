(function () {
  'use strict';

  class Task {
    constructor($http) {

        this.getTaskType = function(){

          return $http({
            method: 'GET',
            url: 'http://localhost:8081/dredge/api/v1.0/tasktypes'
          }).then(function(response) {
              // this callback will be called asynchronously
              // when the response is available
              return response;
            },function(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };

        this.saveTask = function(obj){

          var postObj = {
            "is_active": obj.status.label,
            "fk_dredge_task_type_id": obj.type.dredge_task_type_id,
            "task_name": obj.name,
            "temp_path": obj.path,
             "priority": obj.priority.id
          };

          return $http({
              method: 'POST',
              url: 'http://localhost:8081/dredge/api/v1.0/tasks',
              data : postObj
            }).then(function(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response;
              },function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              }
            );
        };

        this.savePipeLine = function(obj, pipelineId){

          var postObj = {
              "fk_dredge_component_type_id": obj.type.dredge_component_type_id,
              "fk_dredge_abstraction_type_id": obj.abstraction.dredge_abstraction_type_id,
              "task_pipeline_id": pipelineId,
              "prev_pipeline_id": obj.previous,
              "abstraction_mode": obj.mode.label
          };

          return $http({
              method: 'POST',
              url: 'http://localhost:8081/dredge/api/v1.0/task/'+obj.parentTaskId+'/pipelines',
              data : postObj
            }).then(function(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response;
              },function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              }
            );
        };

        this.getComponentType = function(){
          return $http({
            method: 'GET',
            url: 'http://localhost:8081/dredge/api/v1.0/componenttypes'
          }).then(function(response) {
              // this callback will be called asynchronously
              // when the response is available
              return response;
            },function(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };

        this.getComponentList = function(id){
          return $http({
            method: 'GET',
            url: 'http://localhost:8081/dredge/api/v1.0/componenttype/'+id+'/components' 
          }).then(function(response) {
              // this callback will be called asynchronously
              // when the response is available
              return response;
            },function(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };

        this.getAbstractionType = function(){
          return $http({
            method: 'GET',
            url: 'http://localhost:8081/dredge/api/v1.0/abstractiontypes'
          }).then(function(response) {
              // this callback will be called asynchronously
              // when the response is available
              return response;
            },function(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };

        this.getComponentParm = function(obj){
          return $http({
            method: 'GET',
            url: 'http://localhost:8081/dredge/api/v1.0/componenttype/' 
            +obj.fk_dredge_component_type_id+ '/componentsubtype/'+obj.dredge_component_sub_type_id+'/component/'+obj.dredge_component_id+'/componentparameters'
          }).then(function(response) {
              // this callback will be called asynchronously
              // when the response is available
              return response;
            },function(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };

        this.saveComponent = function(index, taskId, pipelineId, compObj, parameters){


        // http://localhost:8081/dredge/api/v1.0/task/{tid}/pipeline/{pid}/componentsparameters
        //   {
        //       "fk_dredge_component_id": 1,
        //       "task_pipeline_id": 1,
        //       "task_pipeline_component_id": 1,
        //       "taskPipelineComponentParameterList" : [{
        //           "fk_dredge_component_parameter_id" : 1,
        //           "task_pipeline_id": 1,
        //           "task_pipeline_component_id": 1,
        //           "task_pipeline_component_parameter_id": 1,
        //           "param_value": "dummy value updated"
        //       }, {
        //           "fk_dredge_component_parameter_id" : 1,
        //           "task_pipeline_id": 1,
        //           "task_pipeline_component_id": 2,
        //           "task_pipeline_component_parameter_id": 1,
        //           "param_value": "dummy value updated"
        //       }]
        //   }
   


          var postObj = {
              "fk_dredge_component_id": compObj.dredge_component_id ,
              "task_pipeline_id": pipelineId,
              "task_pipeline_component_id": index,
              "taskPipelineComponentParameterList" : parameters
          };

          return $http({
              method: 'POST',
              url: 'http://localhost:8081/dredge/api/v1.0/task/'+taskId+'/pipeline/'+pipelineId+'/componentsparameters',
              data : postObj
            }).then(function(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response;
              },function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              }
            );
        };
    }

    get() {
      return 'Task';
    }
  }

  /**
   * @ngdoc service
   * @name dredge.service:Task
   *
   * @description
   *
   */
  angular
    .module('dredge')
    .service('Task', Task);
}());
