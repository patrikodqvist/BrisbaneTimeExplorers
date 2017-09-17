brissyGame.controller('homeCtrl', ['$scope', '$routeParams', '$rootScope', 'Library','Authentication', function($scope,$routeParams,$rootScope, Library, Authentication) {
	if (Library.loaded) {

    }
    else {
    	$scope.initMap = function() {
		Library.loaded = true;
        var uluru = {lat: -27.4710107, lng: 153.0234489};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
          
        });
        var loc = {};
        console.log($rootScope.recordsLists);
        for (obj in $rootScope.recordsLists) {
        	var location = {lat:parseFloat($rootScope.recordsLists[obj].lat), lng:parseFloat($rootScope.recordsLists[obj].long)};
        	var title = $rootScope.recordsLists[obj]['dc:title'];
        	if (loc.lat == location.lat && loc.lng == location.lng) {
        		var marker = new google.maps.Marker({
    				position: location,
    				map: map,
    				icon: {
      				path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
      				scale: 5,
      				offset: '100%'}
  				});

  				marker.addListener('click', function() {
  					console.log($rootScope.recordsLists[obj]['dc:title']);
  				});
  				loc = location;
        	}
        	else {
        		//$rootScope.recordsLists[obj]['dc:title']
          		var marker = new google.maps.Marker({
    				position: location,
    				map: map,
    				title: 'Hello World!'
  				});
  				marker.addListener('click', function() {
  					console.log(title);
  					console.log("hej")
  				});
  				loc = location;
          	}
    	}
    }
    $scope.signout = function() {
    	Authentication.logout();
    }
    
    	$scope.initMap();
    	
    }

    
}]);
