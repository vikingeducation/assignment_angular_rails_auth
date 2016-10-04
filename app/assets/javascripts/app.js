"use strict";
var app = angular.module('app', ['ui.router', 'restangular']);


app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);

app.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/messages');

  $stateProvider
    .state('messages', {
        url: '/messages',
        views:{
          'messages': {
            templateUrl: 'templates/messages/index.html',
            controller: 'MessagesCtrl'   
          }
        }
    });

}]);
