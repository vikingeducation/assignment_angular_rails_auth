var myApp = angular.module("myApp", ["ui.router", "restangular", "Devise"])

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/")

  $stateProvider.state("main", {
    url: "/",
    templateUrl: "/templates/test.html",
    controller: 'StaticPagesCtrl'
  })
})


myApp.controller("StaticPagesCtrl", ["$scope", "Restangular", "Auth", function($scope, Restangular, Auth) {

  Auth.currentUser().then(function(response) {
    $scope.user = response
    console.log($scope.user)
  })

}])