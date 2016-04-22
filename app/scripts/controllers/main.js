'use strict';

angular.module('claseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.students = [{
      id: "1",
      grade: "HS",
      firstName: "Albert",
      lastName: "Learninstein",
      email: "al@equals.org"

    },
      {
        id: "2",
        grade: "HS",
        firstName: "Scott",
        lastName: "Pilgrim",
        email: "spill@comic.edu"

      },
      {
        id: "7",
        grade: "K-8",
        firstName: "Thames",
        lastName: "Bond",
        email: "skyfall@hotmail.com"

      }];
    // var newStudent = {
    //   id: $scope.student.id, 
    //   grade: $scope.student.grade, 
    //   firstName: $scope.student.firstName, 
    //   lastName: $scope.student.lastName, 
    //   email: $scope.student.email
    // };
    
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
