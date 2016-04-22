'use strict';

<<<<<<< HEAD
angular
  .module('claseApp', [
    'ngRoute'
        // 'ngRoute', 'LocalStorageModule'
  ])
  // .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
  //   localStorageServiceProvider.setPrefix('ls');
  // }])
=======
/**
 * @ngdoc overview
 * @name claseApp
 * @description
 * # claseApp
 *
 * Main module of the application.
 */
angular
  .module('claseApp', [
    'ngRoute', 'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }])
>>>>>>> 0d9df87de223cb6510875f39d99f1d4a11c45e8c
  .config(function ($routeProvider) {
    // .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/k-8', {
        templateUrl: 'views/k-8.html',
<<<<<<< HEAD
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/high-school', {
        templateUrl: 'views/high-school.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
=======
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/high-school', {
        templateUrl: 'views/high-school.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
>>>>>>> 0d9df87de223cb6510875f39d99f1d4a11c45e8c
      })
      .otherwise({
        redirectTo: '/'
      });
      // $locationProvider.html5Mode(true);
  });
