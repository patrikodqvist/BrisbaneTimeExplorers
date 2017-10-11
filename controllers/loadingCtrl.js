brissyGame.controller('loadingCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', 'Authentication','$window', function($scope,$routeParams,$rootScope, Library, Authentication,$window) {
	if (Library.loading) {

	}

	else {
		//Sets up the game
	$scope.loadGame = function() {
		if ($rootScope.currentUser.savedGame) {
			$rootScope.levelOne = Library.loadOldMarkers($rootScope.currentUser.levelOne, $rootScope.realEstate);
			$rootScope.levelTwo = Library.loadOldMarkers($rootScope.currentUser.levelTwo, $rootScope.queenslandPictures);
			console.log($rootScope.currentUser.levelThree);
			$rootScope.levelThree = Library.loadOldMarkers($rootScope.currentUser.levelThree, $rootScope.queenslandPictures);
			$rootScope.levelFour = Library.loadOldMarkers($rootScope.currentUser.levelFour, $rootScope.photographs);
			console.log($rootScope.levelOne);
			$window.location.href = "#!/levelmenu";


		}
		else {
			var records = Library.randomMarkers($rootScope.realEstate);
			console.log(records);
			console.log($rootScope.currentUser);
			$rootScope.levelOne = records[0]
			Authentication.saveMarkers("levelOne",records[1]);

			var records = Library.randomMarkers($rootScope.queenslandPictures);
			$rootScope.levelTwo = records[0].slice(0,5);
			$rootScope.levelThree = records[0].slice(5,10);
			var ids = records[1];
			var idTwo = {};
			for (var i=0; i < 5; i++) {
				idTwo[""+i] = records[1][i];
			}
			var idThree = {};
			for (var i=5; i < 10; i++) {
				idThree[""+i] = records[1][i];
			}
			Authentication.saveMarkers("levelTwo",idTwo);
			Authentication.saveMarkers("levelThree",idThree);

			var records = Library.randomMarkers($rootScope.photographs);
			$rootScope.levelFour = records[0]
			Authentication.saveMarkers("levelFour",records[1]);
			
			$window.location.href = "#!/character"
		}
	}
	$scope.loadGame();
	Library.loading = true;


	}
	

	
}]);
