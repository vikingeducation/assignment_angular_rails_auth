"use strict";
app.controller('MessagesCtrl', ['$scope', 'Restangular', function($scope, Restangular){

	$scope.message = "hello!";
	$scope.messages = Restangular.all('messages').getList().$object;

}]);
