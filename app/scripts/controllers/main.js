'use strict';

angular.module('claseApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    var studentsInStore = localStorageService.get('students');

    $scope.students = studentsInStore || [];

    $scope.$watch('students', function () {
      localStorageService.set('students', $scope.students);
    }, true);

    //add students
    $scope.addStudent = function () {
      // console.log('before: ' + $scope.students.length);
      $scope.students.push({ id: $scope.student.id, grade: $scope.student.grade, firstName: $scope.student.firstName, lastName: $scope.student.lastName, email: $scope.student.email });
      // console.log('after: ' + $scope.students.length);
      console.log($scope.students);
      $scope.Reset();
    };
    //remove students
    $scope.removeStudent = function (index) {
      $scope.students.splice(index, 1);
    };

    //clear input fields
    $scope.Reset = function () {
      $scope.student.id = '';
      $scope.student.grade = '';
      $scope.student.firstName = '';
      $scope.student.lastName = '';
      $scope.student.email = '';
    };
  });
