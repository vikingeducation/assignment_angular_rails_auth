sprint.controller("usersCtrl", 
  ["$scope", "Auth",
  function($scope, Auth) {

    console.log('um')

    Auth.currentUser().then(function(user) {
      $scope.currentUser = user;
      console.log(user);
    }, function(response) {
      console.error(response);
    })


  }])