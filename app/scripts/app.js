'use strict';

angular
  .module('nvd3PlayingAroundApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'nvd3ChartDirectives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
