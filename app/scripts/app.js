'use strict';

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
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/high-school', {
        templateUrl: 'views/high-school.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
      // $locationProvider.html5Mode(true);
  });
