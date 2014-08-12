'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('fnHello', ['$scope', function($scope) {
  	//function to return assign set value
  	$scope.addedtext = "World";  	
  }]).controller('menuCtrl', ['$scope','$location', function($scope,$location) {
  	
  	$scope.menuLinks = [{  		
        menuLink: 'home',
        LinkText: 'Home',
    }, {
        menuLink: 'about-us',
        LinkText: 'About Me'
    }, {
        menuLink: 'clients',
        LinkText: 'Clients'
    }, {
        menuLink: 'join-us',
        LinkText: 'Join Us'
    }];

    //if login page then hide menu
    $scope.hideMenus = function() {    	
    	if ($location.path() === "/login") {
    		return true;
    	}	
    }

  	//function to check menu is seleted or not
  	$scope.getMenuClass = function(path) {
  		if($location.path() === path) return true;
  		return false;
  	}; 	
	
  }]).controller('formValidationCtrl', function($scope, $location, $timeout, validateLogin, AuthenticationService) {

  	//button disabled when value is not present
	$scope.disabled = function() {
		//email and password is exist then button clickable	
		if ($scope.useremail && $scope.password) {
			return false;
		}
		return true;
	}

	$scope.login = function() {
		validateLogin.formValidation($scope.useremail,$scope.password).then(function(response) {
				      if (response.data == 'true') {
				      	AuthenticationService.createCookie(response.data);
				      	$location.path("/home");
				      } else {
				      	$scope.errorMessage = "Login failed. Incorrect Username or Password";
				      	$timeout(function(){$scope.errorMessage = "";}, 2000);
				      }
				    },function(error) {
				    	alert('error');
				    });
	}			    

  }).controller('logotCtrl', function($scope, AuthenticationService) {
  	//remove cookie
  	$scope.destroyCookie = function() {  		
  		AuthenticationService.destroy();  				
	}
  });
