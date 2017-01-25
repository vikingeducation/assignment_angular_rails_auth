var myApp = angular.module('myApp', ['ui.router', 'restangular',  'Devise'])

.config(["$httpProvider", function($httpProvider) {
  var token = $('meta[name=csrf-token]')
  .attr('content');
  $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }])

.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])

.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('');

    $stateProvider
      .state('root', {
        url: '',
        templateUrl: '/templates/user.html',
        controller: 'UsersCtrl'
      })
  }])

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});