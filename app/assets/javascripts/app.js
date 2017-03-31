sprint = angular.module("sprint", ['ui.router', 'restangular', 'Devise'])

.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }])

.controller("testCtrl", ["$scope", function($scope) {
  $scope.hi = "hi hih ihi haisodfhas;oidfhasd;jlf";
}])