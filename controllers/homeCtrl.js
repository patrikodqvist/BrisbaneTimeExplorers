brissyGame.controller('homeCtrl', ['$scope', '$routeParams', '$rootScope', 'Library','Authentication', function($scope,$routeParams,$rootScope, Library, Authentication) {
	$scope.landmark=false;

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
	        var len = $rootScope.recordsLists.length; 
	        //Hardcoded to get five random locations

	        $rootScope.markers = [];

	        //console.log($rootScope.recordsLists);
	        for (i = 0; i < 4; i++) { 
	    		//var obj = Library.getRandomArbitrary(1,len);
	    		console.log($rootScope.recordsLists[i]["_id"]);
	        	var location = {lat:parseFloat($rootScope.recordsLists[i].lat), lng:parseFloat($rootScope.recordsLists[i].long)};
	        	//if (loc.lat == location.lat && loc.lng == location.lng) {
	        		var Marker = new google.maps.Marker({
	    				position: location,
	    				map: map
	  				});
	  				Marker.set("id", $rootScope.recordsLists[i]["_id"]);
	  				Marker.addListener('click', function() {
			    		console.log(this.id);
			    		for (land in $rootScope.recordsLists) {
			    			var test = $rootScope.recordsLists[land];
			    			if ($rootScope.recordsLists[land]["_id"] == this.id) {	
			    				$scope.picture = test["150_pixel_jpg"];
			    				$scope.description = test["dc:description"];
			    				$scope.title = test["dc:title"];
			    				$scope.year = test.year;
			    				console.log(test);
			    				var slideIn = document.getElementById('slideIn');
			    				slideIn.style.display='none';
			    				var land = document.getElementById('landmark');
			    				land.style.display='';
			    			}
			    		}
			 		});
	  	

	  				$rootScope.markers.push(Marker);
	        	/*}
	        	else {
	        		//$rootScope.recordsLists[obj]['dc:title']
	          		var Marker = new google.maps.Marker({
	    				position: location,
	    				map: map
	    			});
	  				
	  				loc = location;
	          	}*/
	    	}
	    	/*for (j in $rootScope.markers) {
	    		$rootScope.markers[j].addListener('click', function() {
			    console.log(this);
			 });
	    	}*/
	    }




    $scope.signout = function() {
    	Authentication.logout();
    }

    $scope.cluepage = function() {
    	var test = confirm("You found a clue");
    	if (test) {
    		$scope.closeLandmark();
    	}
    }

    $scope.closeLandmark = function() {
    	var slideIn = document.getElementById('slideIn');
		slideIn.style.display='';
		var land = document.getElementById('landmark');
		land.style.display='none';

    }
    
    	$scope.initMap();
    	
    }

    
}]);
