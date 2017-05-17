MyApp = angular.module('MyApp', [
		// 'ngAnimate',
    'Devise',
		// 'ui.router',
    // 'restangular'
	]);



MyApp.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);


MyApp.controller('UsersCtrl',
  ['$scope', 'Auth',
  function($scope, Auth) {

    Auth.currentUser()
      .then(function(user) {
        $scope.currentUser = user;
        console.log(user);
      }, function(response) {
        console.error(response);
      });

  }]);
