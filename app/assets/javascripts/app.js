var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);









MyApp.factory('_', ['$window', function($window) {
  return $window._; 
}]);