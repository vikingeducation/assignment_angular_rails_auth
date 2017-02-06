var App = angular.module('App', []);

App.controller('AppCtrl', ['$scope', function($scope){
  $scope.hello = "Hello World, from Farruh";
}]);
