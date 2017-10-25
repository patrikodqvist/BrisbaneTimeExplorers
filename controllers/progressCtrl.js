brissyGame.controller('progressCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', 'Authentication','$window', function($scope,$routeParams,$rootScope, Library, Authentication,$window) {
	//global variable
	$scope.procentage = 0;
	//for printing the procemtage to the view
	$scope.progressPros = function() {
		return $scope.procentage;
	}
	//Changes the map after progression of the clues
	$scope.plotClues = function() {
		var counter = 0;
		var levels = ["levelOne","levelTwo","levelThree","levelFour"];
		for (var i=0;i<levels.length;i++){
			angular.forEach($rootScope.currentUser[levels[i]], function(key,value) {
				if (key.clue == 1 || key.clue == 2) {
					if (key.completed) {
						console.log(levels[i]+key.clue);
						var obj = document.getElementById(levels[i]+key.clue);
						obj.style["background-color"] = "rgba(250,250,250,0)";
						counter+=1;
					}
				}
			});
		}
		$scope.procentage = (counter/8) * 100;
	}
	$scope.plotClues();
}]);