var brissyGame = angular.module('brissyGame', ['ngRoute','ngResource', 'ngCookies','firebase']);

brissyGame.config(['$routeProvider',
function($routeProvider) {
	$routeProvider.
	when('/login', {
		controller: 'loginCtrl',
		templateUrl: 'partials/login.html'
	}).
	when('/loading', {
		controller: 'loadingCtrl',
		templateUrl: 'partials/loading.html',
	}).
	when('/character', {
		controller: 'slideInCtrl',
		templateUrl: 'partials/character.html'
	}).
	when('/levelmenu', {
		controller: 'slideInCtrl',
		templateUrl: 'partials/levelmenu.html'
	}).
	when('/home', {
		controller: 'homeCtrl',
		templateUrl: 'partials/homelevel.html' 
	}).
	otherwise('/login', {
		controller: 'loginCtrl',
		templateUrl: 'partials/login.html'
	});
}]);
