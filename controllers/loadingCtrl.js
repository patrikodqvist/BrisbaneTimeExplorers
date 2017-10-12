brissyGame.controller('loadingCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', 'Authentication','$window', function($scope,$routeParams,$rootScope, Library, Authentication,$window) {
	//Makes sure that the script only runs once
	if (Library.loading) {
	}
	else {
		//Sets up the game
		$scope.loadGame = function() {
			if ($rootScope.currentUser.savedGame) {
				$rootScope.levelOne = Library.loadOldMarkers($rootScope.currentUser.levelOne, $rootScope.realEstate);
				$rootScope.levelTwo = Library.loadOldMarkers($rootScope.currentUser.levelTwo, $rootScope.queenslandPictures);
				$rootScope.levelThree = Library.loadOldMarkers($rootScope.currentUser.levelThree, $rootScope.queenslandPictures);
				$rootScope.levelFour = Library.loadOldMarkers($rootScope.currentUser.levelFour, $rootScope.photographs);
				//Sends the user to the levelmenu
				$window.location.href = "#!/levelmenu";
			}
			else {
				//LevelOne
				var records = Library.randomMarkers($rootScope.realEstate);
				$rootScope.levelOne = records[0]
				Authentication.saveMarkers("levelOne",records[1]);
				//LevelTwo And Three
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
				//LevelFour
				var records = Library.randomMarkers($rootScope.photographs);
				$rootScope.levelFour = records[0].slice(0,5);
				var idFour = {};
				for (var i=0; i < 5; i++) {
					idTwo[""+i] = records[1][i];
				}
				Authentication.saveMarkers("levelFour",idFour);
				//Sends the user to customize its character
				$window.location.href = "#!/character"
			}
		}
		$scope.loadGame();
		Library.loading = true;
	}
}]);