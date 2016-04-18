'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('claseApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

it('should be empty', function () {
  expect(scope.students.length).toBe(0);
});
it('should add a student to the list', function () {
  scope.student = 'Test 1';
  scope.addStudent();
  expect(scope.students.length).toBe(1);
});

it('should remove a student from the list', function () {
  scope.student = 'Test 1';
  scope.addStudent();
  scope.removeStudent(0);
  expect(scope.students.length).toBe(0);
});
});
