'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
angular
  .module('savingmexico', [
    'services',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'config'
  ])
  .config(function($routeProvider) {
    $routeProvider.
    when('/:id', {
      templateUrl: 'views/main.html',
      controller: 'FrontpageCtrl'
    }).
    otherwise({
      templateUrl: 'views/main.html',
      controller: 'FrontpageCtrl'
    });
  });