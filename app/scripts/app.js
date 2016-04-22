'use strict';

angular
  .module('claseApp', [
    'ngRoute', 'LocalStorageModule', 'angularCSS'
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
        controller: 'MainCtrl',
        controllerAs: 'main',
        css: 'styles/k-8.css'
      })
      .when('/high-school', {
        templateUrl: 'views/high-school.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        css: 'styles/hs.css'
      })
      .otherwise({
        redirectTo: '/'
      });
    // $locationProvider.html5Mode(true);
  });
