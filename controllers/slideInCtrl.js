brissyGame.controller('slideInCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', 'Authentication','$window', function($scope,$routeParams,$rootScope, Library, Authentication,$window) {
	$scope.back = false;
	//Logs out the user
	$scope.signout = function() {
		Library.loaded = false;
		Library.loading = false;	
		Library.tempArray = [];
		$rootScope.loggedIn = false;
    	Authentication.logout();
    }
    //For the future to jump back to the overworld
    $scope.backButton = function() {
		Library.loaded = false;
		$window.location.href = '#!/levelmenu';

	}
	//Checks if the game is created
	$scope.checkGame = function() {
		if (Library.loaded) {
			return true;
		}
		else {
			return false;
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
	$scope.animations = function() {
		$(document).ready(function() {

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