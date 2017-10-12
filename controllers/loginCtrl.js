brissyGame.controller('loginCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', 'Authentication','$window', function($scope,$routeParams,$rootScope, Library, Authentication,$window) {
	//Loading shall be false initially
	$rootScope.landmark=false;
	//state chall be false
	$scope.state = false;
	//Signup variable
	$scope.signUpTest = false;
	//Counts the loaded data
	$rootScope.loads = 0;
	//updates the html
	$scope.changeState = function() {
		$scope.state = true;
	}
	//Brings out the signup page
	$scope.signUpPopUp = function() {
		$scope.signUpTest = true;
	}
	//Checks if the data is loaded
	$scope.checkLoad = function(num) {
		if ($rootScope.loads == 3) {
				console.log("Loaded" + num);
				if ($rootScope.loggedIn) {
					$window.location.href = "#!/loading"; 
				}
			}
	}
	//Logs in the user
	$scope.login = function(email,password) {
		//creating a User Objebct for the Authentication
		var user = {email:email,
					password:password};
		Authentication.login(user);
		$scope.getData();
	}
	//Sign up
	$scope.signUp = function(username,email,password) {
		var user = {
			username:username,
			email:email,
			password:password};
		Authentication.createNewUser(user);
		$scope.getData();	
	}
	//Retrieves the data
	$scope.getData = function() {
		//Retriveing real Estate data
		var id = "f5ecd45e-7730-4517-ad29-73813c7feda8";
		Library.realEstate.get({id:id}, function(output) {
			var array = Library.sort(output.result.records);
			$rootScope.realEstate = array;
			$rootScope.loads +=1;
			$scope.checkLoad(1);
		});
		var idTwo = "9913b881-d76d-43f5-acd6-3541a130853d";
		Library.queenslandPictures.get({id:idTwo}, function(output){
			var array = Library.sort(output.result.records);
			$rootScope.queenslandPictures = array;
			$rootScope.loads +=1;
			$scope.checkLoad(2);
		});
		var idThree = "26b0b235-13f0-4132-ae47-5ccf3d1c8e89";
		Library.photographs.get({id:idThree}, function(output){
			var array = Library.sort(output.result.records);
			$rootScope.photographs = array;
			$rootScope.loads +=1;
			$scope.checkLoad(3);
		});
	}
}]);