'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
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
            							controller: 'fnHello',
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
  $routeProvider.when(
                        '/login',
                        {
                          templateUrl: 'partials/login.html'
                        }
                      );                        
  $routeProvider.otherwise(
                            {
                              redirectTo: '/login'
                            }
                          );
}]).run(['$route', '$rootScope', '$location', '$cookieStore', function($route, $rootScope, $location, $cookieStore) {
      var original = $location.path;
      $location.path = function(path, avoidReload) {
        var getCookie = $cookieStore.get('isLogin');
        var paths = window.location.href.toString().split('/');
        var urlpath = paths[paths.length - 1];

        //if cookie is not set 
        if ((!getCookie && path && path !== "/login") || (!getCookie && urlpath !== "login")) {
          return original.apply($location, ['/login']);
        }

        $rootScope.getCookie = getCookie;
        if (avoidReload) {
          var lastRoute = $route.current;
          //$locationChangeSuccess occurs before the route is matched and the controller invoked
          $rootScope.$on('$locationChangeSuccess ', function() {
            $route.current = lastRoute;
          });
        }
        return original.apply($location, [path]);
      };
    }
  ]);