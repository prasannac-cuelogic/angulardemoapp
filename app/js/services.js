'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
service('validateLogin', function($http) {

	this.formValidation=function(email,password)
	{
		var userDetails = {
		                	angular_action : 'loginaction',
		                    email: email,
		                    pswd: password
		                };
		    var   postData = {
	                "p": JSON.stringify(userDetails)
	            };                    
		        
	        var request = $http({
			            method: "GET",
			            url: "login.php",
			            params: postData
			        });

	        return request;
			/*var request = $http.post ("login.php", postData);*/		
	};		
}).service('AuthenticationService', function ($cookieStore) {
	//Service is created for set cookie value
  this.createCookie = function (strSetValue) {
    // Set cookie
    $cookieStore.put('isLogin', strSetValue);
  };
  this.destroy = function () {  	
  	//Remove cookie
    $cookieStore.remove('isLogin');
  };
  return this;
});	

