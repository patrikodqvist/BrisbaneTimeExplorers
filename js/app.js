var brissyGame = angular.module('brissyGame', ['ngRoute','ngResource', 'ngCookies','firebase']);

brissyGame.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
 when('/login', {
      controller: 'loginCtrl',
      templateUrl: 'partials/login.html',
      }).
 when('/character', {
 	  templateUrl: 'partials/character.html'
 }).
 when('/levelmenu', {
 	templateUrl: 'partials/levelmenu.html'
 }).
  when('/home', {
  		controller: 'homeCtrl',
      	templateUrl: 'partials/homelevel.html',  
    	}).
  otherwise('/login', {
      controller: 'loginCtrl',
      templateUrl: 'partials/login.html',
      });
}]);
