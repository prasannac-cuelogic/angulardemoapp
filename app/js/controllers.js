'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('fnHello', ['$scope', function($scope) {
  	//function to return assign set value
  	$scope.addedtext = "World";  	
  }]).controller('mainCtrl', ['$scope','$location', function($scope,$location) {  
  	//function to check menu is seleted or not
  	$scope.getMenuClass = function(path) {
  		if($location.path() === path) return true;
  		return false;
  	}; 	
	
  }]);
