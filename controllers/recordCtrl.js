brissyGame.controller('recordCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', 'Authentication','$window', function($scope,$routeParams,$rootScope, Library, Authentication,$window) {
	if (Library.mapLoad) {

	}
	else {
		$scope.initMap = function() {
		var center = {lat: $scope.detailObject.lat, lng: $scope.detailObject.long};
        var map = new google.maps.Map(document.getElementById('mapTwo'), {
          zoom: 13,
          center: center
          
        });
        var Marker = new google.maps.Marker({
				position: center,
				map: map
			});
	}

	$scope.initMap()
	Library.mapLoad = true;
}
}]);