brissyGame.controller('slideInCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', 'Authentication','$window', function($scope,$routeParams,$rootScope, Library, Authentication,$window) {
	$scope.back = false;
	$scope.clicked = false;
	$scope.boy=false;
	$scope.genderChosen=false;
	//Logs out the user
	$scope.signout = function() {
		Library.loaded = false;
		Library.loading = false;	
		Library.tempArray = [];
		$rootScope.loggedIn = false;
    	Authentication.logout();
    	$window.location.reload();
    }
    //For the future to jump back to the overworld
    $scope.backButton = function() {
		Library.loaded = false;
		$window.location.href = '#!/levelmenu';
	}
	//Checks if the game is created
	$scope.checkGame = function() {
		var win = $window.location.href;
		var url = win.split("#!/"); 
		if (url[1]=="levelmenu") {
			return false;
		}
		else {
			return true;
		}
	}
	//Slider animations
	$scope.clickAction = function() {
		var url = $window.location.href;
		var location = url.split("#!/")
		if ($scope.clicked) {
			if (location[1]=="home") {
				var map = document.getElementById("map");
				map.className = "col-md-11";
				$scope.clicked=false;
			}
			else if (location[1]=="search") {
				var search = document.getElementById("searchfield");
				search.className = "col-md-11";
				$scope.clicked=false;
			}
			else if (location[1]=="aboutus") {
				var search = document.getElementById("aboutUS");
				search.className = "col-md-11";
				$scope.clicked=false;
			}
			else if (location[1]=="progress") {
				var search = document.getElementById("progressPage");
				search.className = "col-md-11";
				$scope.clicked=false;
			}
			else if (location[1]=="references") {
				var search = document.getElementById("referencesPage");
				search.className = "col-md-11";
				$scope.clicked=false;
			}
			else {
				var map = document.getElementById("levelMenu");
				map.className = "col-md-11";
				$scope.clicked=false;	
			}
		}
		else {
			if (location[1]=="home") {
				var map = document.getElementById("map");
				map.className = "col-md-9";
				$scope.clicked=true;
				
			}
			else if (location[1]=="search") {
				var search = document.getElementById("searchfield");
				search.className = "col-md-9";
				$scope.clicked=true;
				
			}
			else if (location[1]=="aboutus") {
				var search = document.getElementById("aboutUS");
				search.className = "col-md-9";
				$scope.clicked=true;
			}
			else if (location[1]=="progress") {
				var search = document.getElementById("progressPage");
				search.className = "col-md-9";
				$scope.clicked=true;
			}
			else if (location[1]=="references") {
				var search = document.getElementById("referencesPage");
				search.className = "col-md-9";
				$scope.clicked=true;
			}
			else {
				var map = document.getElementById("levelMenu");
				map.className = "col-md-9";
				$scope.clicked=true;
			}
		}
	}
	//Decides which set of markers shall be loaded
	$scope.levelLoad = function(number) {
		if (number==1) {
			$rootScope.recordsLists = $rootScope.levelOne;
			Library.level = "One";
			//$rootScope.markers = $rootScope.currentUser.levelOne;
			$window.location.href = "#!/home";
		}
		else if (number==2) {
			$rootScope.recordsLists = $rootScope.levelTwo;
			//$rootScope.markers = $rootScope.currentUser.levelTwo;
			Library.level = "Two";
			$window.location.href = "#!/home";

		}
		else if (number==3) {
			$rootScope.recordsLists = $rootScope.levelThree;
			//$rootScope.markers = $rootScope.currentUser.levelThree;
			Library.level = "Three";
			$window.location.href = "#!/home";
		}
		else {
			$rootScope.recordsLists = $rootScope.levelFour;
			//$rootScope.markers = $rootScope.currentUser.levelFour;
			Library.level = "Four";
			$window.location.href = "#!/home";
		}
	}
	//genderChoice
	$scope.genderChoice = function(gender) {
		if (gender=="boy") {
			$scope.genderChosen=true;
			$scope.boy=true;
		}
		else {
			$scope.genderChosen=true;
		}
	}
	//saveCharacterImage
	$scope.saveCharacterImage = function(avatar_image_url,top,bottom,shoe) {
        Authentication.addImages(avatar_image_url,top,bottom,shoe);
	}
	$scope.animations = function() {
		$(document).ready(function() {
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
		    /*
    Code for Avatar Selection
    */

    //Code to show male or female options

    //$('#femaleoptions').remove();


    // Code for Overlaying images on the empty avatar

    $('img.topoption, img.bottomoption, img.shoeoption').mouseenter(function(){
        $(this).animate({opacity: '0.6'});
    });

    $('img.topoption, img.bottomoption, img.shoeoption').mouseleave(function(){
        $(this).animate({opacity: '1.0'});
    });

    $('img.topoption, img.bottomoption, img.shoeoption').click(function(){
       var current_id = $(this).attr('id');
       //Male Activation
       if(current_id =="topchoice1") {
        $('#topselectionactive').remove();
        $('#topselection').append('<img src="images/male_red_top.png" id="topselectionactive"/>');
       }

       if(current_id =="topchoice2") {
        $('#topselectionactive').remove();
        $('#topselection').append('<img src="images/male_green_top.png" id="topselectionactive"/>');
       }

       if(current_id =="topchoice3") {
        $('#topselectionactive').remove();
        $('#topselection').append('<img src="images/male_silver_top.png" id="topselectionactive"/>');
       }

       if(current_id =="bottomchoice1") {
        $('#bottomselectionactive').remove();
        $('#bottomselection').append('<img src="images/male_red_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="bottomchoice2") {
        $('#bottomselectionactive').remove();
        $('#bottomselection').append('<img src="images/male_green_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="bottomchoice3") {
        $('#bottomselectionactive').remove();
        $('#bottomselection').append('<img src="images/male_silver_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="shoechoice1") {
        $('#shoeselectionactive').remove();
        $('#shoeselection').append('<img src="images/male_red_shoes.png" id="shoeselectionactive"/>');
       }

       if(current_id =="shoechoice2") {
        $('#shoeselectionactive').remove();
        $('#shoeselection').append('<img src="images/male_green_shoes.png" id="shoeselectionactive"/>');
       }

       if(current_id =="shoechoice3") {
        $('#shoeselectionactive').remove();
        $('#shoeselection').append('<img src="images/male_silver_shoes.png" id="shoeselectionactive"/>');
       }

       //Female Activation

       if(current_id =="ftopchoice1") {
        $('#topselectionactive').remove();
        $('#ftopselection').append('<img src="images/female_silver_top.png" id="topselectionactive"/>');
       }

       if(current_id =="ftopchoice2") {
        $('#topselectionactive').remove();
        $('#ftopselection').append('<img src="images/female_pink_top.png" id="topselectionactive"/>');
       }

       if(current_id =="ftopchoice3") {
        $('#topselectionactive').remove();
        $('#ftopselection').append('<img src="images/female_blue_top.png" id="topselectionactive"/>');
       }

       if(current_id =="fbottomchoice1") {
        $('#bottomselectionactive').remove();
        $('#fbottomselection').append('<img src="images/female_silver_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="fbottomchoice2") {
        $('#bottomselectionactive').remove();
        $('#fbottomselection').append('<img src="images/female_pink_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="fbottomchoice3") {
        $('#bottomselectionactive').remove();
        $('#fbottomselection').append('<img src="images/female_blue_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="fshoechoice1") {
        $('#shoeselectionactive').remove();
        $('#fshoeselection').append('<img src="images/female_silver_shoes.png" id="shoeselectionactive"/>');
       }

       if(current_id =="fshoechoice2") {
        $('#shoeselectionactive').remove();
        $('#fshoeselection').append('<img src="images/female_pink_shoes.png" id="shoeselectionactive"/>');
       }

       if(current_id =="fshoechoice3") {
        $('#shoeselectionactive').remove();
        $('#fshoeselection').append('<img src="images/female_blue_shoes.png" id="shoeselectionactive"/>');
       }

    });

    // Code to Save Avatar parts

    $('#savemale').click(function(){
        var topselection = $('#topselection img').attr('src');
        var bottomselection = $('#bottomselection img').attr('src');
        var shoeselection = $('#shoeselection img').attr('src');
        var badInput=false;
        
        if(topselection == "images/male_red_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "images/avatar1.png" ;
        }else if(topselection == "images/male_red_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "images/avatar2.png" ;
        }else if(topselection == "images/male_red_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "images/avatar3.png" ;
        }else if(topselection == "images/male_red_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "images/avatar4.png";
        }else if(topselection == "images/male_red_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "images/avatar5.png" ;
        }else if(topselection == "images/male_red_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "images/avatar6.png" ;
        }else if(topselection == "images/male_red_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "images/avatar7.png" ;
        }else if(topselection == "images/male_red_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "images/avatar8.png" ;
        }else if(topselection == "images/male_red_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "images/avatar9.png" ;
        }else if(topselection == "images/male_green_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "images/avatar10.png" ;
        }else if(topselection == "images/male_green_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "images/avatar11.png" ;
        }else if(topselection == "images/male_green_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "images/avatar12.png" ;
        }else if(topselection == "images/male_green_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "images/avatar13.png" ;
        }else if(topselection == "images/male_green_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "images/avatar14.png" ;
        }else if(topselection == "images/male_green_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "images/avatar15.png" ;
        }else if(topselection == "images/male_green_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "images/avatar16.png" ;
        }else if(topselection == "images/male_green_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "images/avatar17.png" ;
        }else if(topselection == "images/male_green_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "images/avatar18.png" ;
        }else if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "images/avatar19.png" ;
        }else if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "images/avatar20.png" ;
        }else if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "images/avatar21.png" ;
        }else if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "images/avatar22.png" ;
        }else if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "images/avatar23.png" ;
        }else if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "images/avatar24.png" ;
        }else if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "images/avatar25.png" ;
        }else if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "images/avatar26.png" ;
        }else if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "images/avatar27.png" ;
        }else{
            badInput=true;
        }
        if (badInput) {
        	$rootScope.errorMessage = "Need to select one of each";
        }
        else {
        	$scope.saveCharacterImage(avatar_image_url,topselection,bottomselection,shoeselection);
        }
        

    });

    $('#savefemale').click(function(){
        var topselection = $('#ftopselection img').attr('src');
        var bottomselection = $('#fbottomselection img').attr('src');
        var shoeselection = $('#fshoeselection img').attr('src');
       
        var badInput=false;

        if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/female_silver_shoes.png"){
            avatar_image_url = "images/avatar28.png" ;
        }else if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/female_pink_shoes.png"){
            avatar_image_url = "images/avatar29.png" ;
        }else if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/female_blue_shoes.png"){
            avatar_image_url = "images/avatar30.png" ;
        }else if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/female_silver_shoes.png"){
            avatar_image_url = "images/avatar31.png" ;
        }else if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/female_pink_shoes.png"){
            avatar_image_url = "images/avatar32.png" ;
        }else if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/female_blue_shoes.png"){
            avatar_image_url = "images/avatar33.png" ;
        }else if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/female_silver_shoes.png"){
            avatar_image_url = "images/avatar34.png" ;
        }else if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/female_pink_shoes.png"){
            avatar_image_url = "images/avatar35.png" ;
        }else if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/female_blue_shoes.png"){
            avatar_image_url = "images/avatar36.png" ;
        }else if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/female_silver_shoes.png"){
            avatar_image_url = "images/avatar37.png" ;
        }else if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/female_pink_shoes.png"){
            avatar_image_url = "images/avatar38.png" ;
        }else if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/female_blue_shoes.png"){
            avatar_image_url = "images/avatar39.png" ;
        }else if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/female_silver_shoes.png"){
            avatar_image_url = "images/avatar40.png" ;
        }else if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/female_pink_shoes.png"){
            avatar_image_url = "images/avatar41.png" ;
        }else if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/female_blue_shoes.png"){
            avatar_image_url = "images/avatar42.png" ;
        }else if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/female_silver_shoes.png"){
            avatar_image_url = "images/avatar43.png" ;
        }else if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/female_pink_shoes.png"){
            avatar_image_url = "images/avatar44.png" ;
        }else if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/female_blue_shoes.png"){
            avatar_image_url = "images/avatar45.png" ;
        }else if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/female_silver_shoes.png"){
            avatar_image_url = "images/avatar46.png" ;
        }else if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/female_pink_shoes.png"){
            avatar_image_url = "images/avatar47.png" ;
        }else if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/female_blue_shoes.png"){
            avatar_image_url = "images/avatar48.png" ;
        }else if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/female_silver_shoes.png"){
            avatar_image_url = "images/avatar49.png" ;
        }else if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/female_pink_shoes.png"){
            avatar_image_url = "images/avatar50.png" ;
        }else if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/female_blue_shoes.png"){
            avatar_image_url = "images/avatar51.png" ;
        }else if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/female_silver_shoes.png"){
            avatar_image_url = "images/avatar52.png" ;
        }else if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/female_pink_shoes.png"){
            avatar_image_url = "images/avatar53.png" ;
        }else if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/female_blue_shoes.png"){
            avatar_image_url = "images/avatar54.png" ;
        }else{
            badInput=true;
        }
        if (badInput) {
        	$rootScope.errorMessage = "Need to select one of each";
        }
        else {
        	$scope.saveCharacterImage(avatar_image_url,topselection,bottomselection,shoeselection);
        }
    	});
		});
	}
	$scope.animations();
}]);