App = angular.module('App', ['ui.router', 'restangular', 'Devise']);

App.factory('_', ['$window', function($window) {
  return $window._;
}]);

App.config(
  ["$stateProvider", "$urlRouterProvider", "RestangularProvider", function($stateProvider, $urlRouterProvider, RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

  $urlRouterProvider.otherwise("/messages")

  $stateProvider

  .state("user", {
    url:"/user",
    templateUrl: "/templates/user.html",
    controller:"userCtrl"
  })


}]);
