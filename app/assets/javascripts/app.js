MyApp = angular.module('MyApp', ['Devise']);

MyApp.config(
  ["$httpProvider", 'Auth',
  function($httpProvider, Auth) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);

MyApp.controller('UsersCtrl',
['$scope', 'Auth', function($scope, Auth) {

  // Auth.currentUser()
  //   .then(function(user) {
  //     $scope.currentUser = user;
  //     console.log(user);
  //   }, function(response) {
  //     console.log(response);
  //   });

}]);
