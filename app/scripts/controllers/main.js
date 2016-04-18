'use strict';

/**
 * @ngdoc function
 * @name claseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the claseApp
 */
angular.module('claseApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    $scope.students = [{
      ID: $scope.id,
      Grade: $scope.grade,
      FirstName: $scope.first_name,
      LastName: $scope.last_name,
      Email: $scope.email
    }];

    $scope.Reset = function () {
      $scope.student = '';
      $scope.id = '';
      $scope.grade = '';
      $scope.first_name = '';
      $scope.last_name = '';
      $scope.email = '';
    }

    $scope.addStudent = function () {
      $scope.students.push({ ID: $scope.id, Grade: $scope.grade, FirstName: $scope.first_name, LastName: $scope.last_name, Email: $scope.email });
      $scope.Reset();
    };
    $scope.removeStudent = function (index) {
      $scope.students.splice(index, 1);
    };
  });
