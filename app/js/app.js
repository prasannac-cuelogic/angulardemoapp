'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when(
            						'/home',
            						{
            							templateUrl: 'partials/hello.html',
            							controller: 'fnHello'
            						}
                      );
  $routeProvider.when(
                        '/about-us', 
                        {
                          templateUrl: 'partials/aboutme.html'
                        }
                      );
  $routeProvider.when(
                        '/clients',
                        {
                          templateUrl: 'partials/clients.html'
                        }
                      );
  $routeProvider.when(
                        '/join-us',
                        {
                          templateUrl: 'partials/joinus.html'
                        }
                      );
  $routeProvider.when(
                        '/terms-and-conditions',
                        {
                          templateUrl: 'partials/termsandconditions.html'
                        }
                      );  
  $routeProvider.otherwise(
                            {
                              redirectTo: '/home'
                            }
                          );
}]);
