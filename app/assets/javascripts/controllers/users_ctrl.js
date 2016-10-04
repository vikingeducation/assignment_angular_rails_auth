app.controller('UsersCtrl', ['$scope', 'Auth', function($scope, Auth){

  Auth.currentUser()
    .then(function(user){
      console.log("user! " + user);
      $scope.currentUser = user;
    }, function(response){
      console.error('auth error! ' + response);
    });

}]);
