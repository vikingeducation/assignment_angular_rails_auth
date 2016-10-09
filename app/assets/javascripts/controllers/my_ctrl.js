MyApp.controller("MyCtrl", ['$scope', 'Restangular', 'Auth', function($scope, Restangular, Auth){


  Auth.currentUser().then(function(user){
    $scope.currentUser = user;
  }, function(response){
    console.error(response);
  });

    
  $scope.message = "BATMAN";

  
}]);