var brissyGame = angular.module('brissyGame', ['ngRoute','ngResource', 'ngCookies','firebase']);

brissyGame.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
 when('/login', {
      controller: 'loginCtrl',
      templateUrl: 'partials/login.html',
      }).
  when('/home', {
  		controller: 'homeCtrl',
      	templateUrl: 'partials/home.html',  
    	}).
  otherwise('/login', {
      controller: 'loginCtrl',
      templateUrl: 'partials/login.html',
      });
}]);
