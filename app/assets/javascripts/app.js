App = angular.module('App', ['ui.router', 'restangular']);

App.factory('_', ['$window', function($window) {
  return $window._;
}]);

App.config(
  ["$stateProvider", "$urlRouterProvider", "RestangularProvider", function($stateProvider, $urlRouterProvider, RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

}]);
