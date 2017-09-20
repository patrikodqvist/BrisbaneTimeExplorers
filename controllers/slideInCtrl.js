brissyGame.controller('slideInCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', 'Authentication','$window', function($scope,$routeParams,$rootScope, Library, Authentication,$window) {
	$scope.back = false;
	//Logs out the user
	$scope.signout = function() {
		Library.loaded = false;
    	Authentication.logout();
    }
    //For the future to jump back to the overworld
    $scope.backButton = function() {
		Library.loaded = false;
		$window.location.href = '#!/home'

	}
	//Checks if the game is created
	$scope.checkGame = function() {
		if (Library.loaded) {
			return true;
		}
		else {
			return false;
		}
	}
}]);