var MyApp = angular.module('MyApp', ['Devise', 'ui.router', 'restangular']);


MyApp.factory('_', ['$window', function($window) {
  return $window._;
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

    $scope.logOut = function(){
      Auth.logout();
    };

  }]);


MyApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('default', {
      url: '',
      views: {
        "": {
          template: '<div>Welcome: {{ currentUser.email }} <a data-method="delete" href="/users/sign_out" rel="nofollow">Logout</a></div>',
          controller: 'UsersCtrl'
        }
      }
    })

});


MyApp.config(
  ['RestangularProvider',
  function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');

  }]);

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



// MyApp.controller('TestCtrl', ['$scope', function($scope){
//   $scope.message = 'Hello Angular on Rails!';
// }]);



// MyApp.controller('MessagesCtrl', ['$scope', 'Restangular', function($scope, Restangular){

//   $scope.hello = 'hello';
//   $scope.messages = Restangular.all('messages').getList().$object;
// }]);









// debugging
MyApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});