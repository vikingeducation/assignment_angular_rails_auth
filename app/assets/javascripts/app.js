var App = angular.module('App', ['Devise']);

App.controller('AppCtrl', ['$scope', 'Auth', function($scope, Auth){
  $scope.hello = "Hello World, from Farruh";

  Auth.currentUser()
    .then(function(user){
      $scope.currentUser = user;
      console.log(user);
    })
}]);



App.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);
