brissyGame.controller('searchCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', 'Authentication','$window', function($scope,$routeParams,$rootScope, Library, Authentication,$window) {
	$scope.search = function(input) {
		$scope.searchResults = Library.search(input);
	}

	$scope.returnResults = function() {
		return $scope.searchResults;
	}
	//For the future to jump back to the overworld
    $scope.backButton = function() {
		Library.loaded = false;
		$window.location.href = '#!/levelmenu';

	}
	//To bring the right object to the detail page
	$scope.forward = function(title,id) {
		Library.mapLoad = false;
		var result = Library.findObject(id,title);
		$rootScope.detailObject = result;
		$window.location.href = "#!/record";
	}
}]);