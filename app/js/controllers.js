'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('fnHello', ['$scope', function($scope) {
  	//function to return assign set value
  	$scope.addedtext = "World";
  }]);
