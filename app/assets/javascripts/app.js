var MyApp = angular.module('MyApp', ['ui.router', 'restangular', 'Devise']);









MyApp.factory('_', ['$window', function($window) {
  return $window._; 
}]);