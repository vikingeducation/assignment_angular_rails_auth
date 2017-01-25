var myApp = angular.module('myApp', ['ui.router', 'restangular'])

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
        template: 'Hello angular!'
      })
  }])

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});