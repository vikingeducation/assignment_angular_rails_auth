App.controller("userCtrl",["Auth", "$scope", function(Auth, $scope){

  Auth.currentUser().then(function(user) {
    $scope.currentUser = user;
  })

}])