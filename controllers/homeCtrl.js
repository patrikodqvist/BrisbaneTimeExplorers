brissyGame.controller('homeCtrl', ['$scope', '$routeParams', '$rootScope', 'Library','Authentication', function($scope,$routeParams,$rootScope, Library, Authentication) {
	$scope.initMap = function() {
        var uluru = {lat: -27.4710107, lng: 153.0234489};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
          
        });
        console.log($rootScope.recordsLists);
        for (obj in $rootScope.recordsLists) {
          	var location = {lat:$rootScope.recordsLists[obj].lat, lng:$rootScope.recordsLists[obj].long};
          	console.log(location);
          	var marker = new google.maps.Marker({
    			position: location,
    			map: map
  			});
          }
    }
    $scope.signout = function() {
    	Authentication.logout();
    }
    $scope.initMap();
}]);
