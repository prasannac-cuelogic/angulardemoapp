'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive('headerBlock', function() {
  	return {
  		restrict: 'E',
  		templateUrl: 'partials/header.html',
  		controller: 'menuCtrl',
  	}
  }).directive('footerBlock', function() {
  	return {
  		restrict: 'E',
  		templateUrl: 'partials/footer.html',
  	}
  });
