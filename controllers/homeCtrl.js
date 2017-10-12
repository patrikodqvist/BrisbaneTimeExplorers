brissyGame.controller('homeCtrl', ['$scope', '$routeParams', '$rootScope', 'Library','Authentication', function($scope,$routeParams,$rootScope, Library, Authentication) {
	//to open the landmark slide in
	$scope.landmark=false;
	//to keep track of the landmark that is open
	$scope.id = 0;
	//List of all the markers
	$scope.markerList = [];
	//Javascripts runs scropts twice and the second time is not necessary to rebuild the map
	if (Library.loaded) {
    }
    else {
    	//Map constructor
	    $scope.initMap = function() {
			Library.loaded = true;
	        var brissy = {lat: -27.4710107, lng: 153.0234489};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 13,
	          center: brissy
	          
	        });
	        //Keep track of the length of the objects to print out
	        var len = $rootScope.recordsLists.length; 
	        for (i = 0; i < len; i++) { 
	        	var location = {lat:$rootScope.recordsLists[i].lat, lng:$rootScope.recordsLists[i].long};
        		var Marker = new google.maps.Marker({
    				position: location,
    				map: map
  				});
  				Marker.set("id", $rootScope.recordsLists[i]["_id"]);
  				if (Library.idValidator(Marker.id, $rootScope.currentUser["level"+Library.level])) {
  					Marker.setIcon("https://www.google.com/mapfiles/marker_green.png");
  				}
  				//The event that will happen when the marker is clicked
  				Marker.addListener('click', function() {
		    		for (land in $rootScope.recordsLists) {
		    			if ($rootScope.recordsLists[land]["_id"] == this.id) {	
		    				$scope.id = this.id;
		    				//To check if the user has completed the marker or not
		    				if (Library.idValidator($scope.id, $rootScope.currentUser["level"+Library.level])) {
	    						console.log("completed")
	    					}
	    					else {
	    						//Opens the marker
			    				var slideIn = document.getElementById('slideIn');
			    				slideIn.style.display='none';
			    				var id = 'landmark'+this.id;
			    				var infoPage = document.getElementById(id);
			    				infoPage.style.display='';
			    				var land = document.getElementById('landmark');
			    				land.style.display='';
		    				}
		    			}
			
		    		}
		 		});
		 		$scope.markerList.push(Marker);
	    	}
	    }
	//When the user finds a clue
    $scope.cluepage = function() {
    	var test = confirm("You found a clue");
    	if (test) {
    		for (marker in $scope.markerList) {
    			if ($scope.markerList[marker].id == $scope.id) {
    				$scope.markerList[marker].setIcon("https://www.google.com/mapfiles/marker_green.png");
    				$rootScope.currentUser["level"+Library.level] = Library.markerChangeState($scope.id,$rootScope.currentUser["level"+Library.level]);
    				//Saves it to Firebase
    				Authentication.saveClue($rootScope.currentUser["level"+Library.level],Library.level);
    				$rootScope.currentUser.currancy+=100;
    				//Saves it to Firebase
    				Authentication.addMoney($rootScope.currentUser.currancy);	 
    			}
    		}
    	}
    	$scope.closeLandmark();
    }
    //Closing of the landmark info
    $scope.closeLandmark = function() {
    	var slideIn = document.getElementById('slideIn');
		slideIn.style.display='';
		var id = 'landmark'+$scope.id;
		var infoPage = document.getElementById(id);
		infoPage.style.display='none';
		var land = document.getElementById('landmark');
		land.style.display='none';
    }
    //Makes sure that the map is constructed
    $scope.initMap();
    }
    //Animations
	$scope.animations = function() {
		$(document).ready(function() {
			$('#chestbutton').mouseenter(function(){
        		$('img#chest').attr("src","images/chest_open.png");
    		});

    		$('#chestbutton').mouseleave(function(){
        		$('img#chest').attr("src","images/chest_closed.png");
    		});

    		$('img#chest').mouseenter(function(){
        		$(this).attr("src","images/chest_open.png");
        		
    		});

    		$('img#chest').mouseleave(function(){
        		$(this).attr("src","images/chest_closed.png");
    		});

		    $('img.avatarsm').mouseenter(function(){
		        $(this).animate({width: '110px' ,height:'520px'},'1000');
		    });

		    $('img.avatarsm').mouseleave(function(){
		        $(this).animate({width: '100px' ,height:'500px'},'1000');
		    });

		     $('img.avatarsf').mouseenter(function(){
		        $(this).animate({width: '130px' ,height:'540px'},'1000');
		    });

		    $('img.avatarsf').mouseleave(function(){
		        $(this).animate({width: '120px' ,height:'540px'},'1000');
		    });

		    $('img.avatarsm').click(function(){
		        $('img').removeClass("light");
		        $(this).addClass("light");
		    });

		    $('img.avatarsf').click(function(){
		        $('img').removeClass("light");
		        $(this).addClass("light");
		    });

		    $('img#level1').mouseenter(function(){
		        $(this).attr("src","images/Level-1.png");
		    });

		    $('img#level1').mouseleave(function(){
		        $(this).attr("src","images/Level1.png");
		    });

		    $('img#level2').mouseenter(function(){
		        $(this).attr("src","images/Level-2.png");
		    });

		    $('img#level2').mouseleave(function(){
		        $(this).attr("src","images/Level2.png");
		    });

		     $('img#level3').mouseenter(function(){
		        $(this).attr("src","images/Level-3.png");
		    });

		    $('img#level3').mouseleave(function(){
		        $(this).attr("src","images/Level3.png");
		    });

		     $('img#level4').mouseenter(function(){
		        $(this).attr("src","images/Level-4.png");
		    });

		    $('img#level4').mouseleave(function(){
		        $(this).attr("src","images/Level4.png");
		    });
		});
	}
	$scope.animations();
}]);
