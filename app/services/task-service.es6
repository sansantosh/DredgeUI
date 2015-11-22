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
            "temp_path": "/Users/hgandhi/Desktop/All/DredgeData/",
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

        this.addPipeLine = function(){

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
