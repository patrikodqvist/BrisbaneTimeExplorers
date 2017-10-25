brissyGame.factory('Authentication',function ($rootScope,$resource,$cookieStore,$firebaseArray,$firebaseObject,$firebaseAuth,$window, Library) {
	var ref = firebase.database().ref("users");
	var object = $firebaseObject(ref);
	var auth = $firebaseAuth();
	//-------------------------------------------
	auth.$onAuthStateChanged(function(authUser) {
	    if(authUser) {
	      var userRef = ref.child(authUser.uid);
	      var userObj = $firebaseObject(userRef);
	      $rootScope.currentUser = userObj;
	    } 
	    else {
	      $rootScope.currentUser = '';
	    }
  	});
	//LogsIn a user, and authenticates with firebase
	var service = {
		login: function(user) {
			auth.$signInWithEmailAndPassword(
				user.email,
				user.password
			).then(function(user){
				console.log("login success");
				var userRef = ref.child(user.uid);
	      		var userObj = $firebaseObject(userRef);
	      		$rootScope.currentUser = userObj;
	      		$rootScope.loggedIn = true;
				if ($rootScope.loads == 3) {
					$rootScope.errorMessage="";
					$window.location.href = "#!/loading"; 
				}
			}).catch(function(error) {
				$rootScope.loggedIn = false;
				$rootScope.errorMessage = error.message;
			    Library.loading=false;
			    Library.tempArray=[]; 
			    $rootScope.loads = 0;
			    $rootScope.realEstate = [];
			    $rootScope.queenslandPictures = [];
			    $rootScope.photographs = [];
				//$window.location.href = "#!/login";
				var user = firebase.auth().currentUser;
				var credential = firebase.auth.EmailAuthProvider.credential(user.email, userProvidedPassword);
				// Prompt the user to re-provide their sign-in credentials
				user.reauthenticate(credential).then(function() {
  				// User re-authenticated.
				}, function(error) {
  				// An error happened.
				});
			});
		},
		//Creates a New User, and signs the new user.
		createNewUser: function(user) {
			auth.$createUserWithEmailAndPassword(
				user.email,
				user.password,
				user.username
				).then(function(newUser) {
					ref.child(newUser.uid).set({
						email: user.email,
						password: user.password,
						username: user.username,
						id: newUser.uid,
						unlocks: '',
						clues: '',
						shoes: '',
						pants: '',
						avatarIMG: '',
						jumper: '',
						currancy: 0,
						levelOne: '',
						levelTwo: '',
						levelThree: '',
						levelFour: '',
						savedGame: false,
					});
					service.login(user);
				}).catch(function(error) {
					console.log(error);
					$rootScope.errorMessage= error.message;
				});
		},
		//SavesGameMarkes
		saveMarkers: function(type, markers) {
			if (type=="levelOne") {
				ref.child($rootScope.currentUser.id).child("levelOne").set(markers);
				ref.child($rootScope.currentUser.id).child("savedGame").set(true);
			}
			else if (type=="levelTwo") {
				ref.child($rootScope.currentUser.id).child("levelTwo").set(markers);
			}
			else if (type=="levelThree") {
				ref.child($rootScope.currentUser.id).child("levelThree").set(markers);
			}
			else {
				ref.child($rootScope.currentUser.id).child("levelFour").set(markers).then(function() {
					console.log("success");
					$rootScope.errorMessage="";
					//Sends the user to customize its character
					$window.location.href = "#!/character";
				});
				
			}
		},
		//Saves down the completed markers
		saveClue: function(markers,level) {
			ref.child($rootScope.currentUser.id).child("level"+level).set(markers);
		},
		//Adds money to the user
		addMoney:function(money) {
			ref.child($rootScope.currentUser.id).child("currancy").set(money);
		},
		//Adds the images to the character
		addImages:function(avatarIMG,top,bottom,shoes) {
			ref.child($rootScope.currentUser.id).child("avatarIMG").set(avatarIMG);
			ref.child($rootScope.currentUser.id).child("jumper").set(top);
			ref.child($rootScope.currentUser.id).child("pants").set(bottom);
			ref.child($rootScope.currentUser.id).child("shoes").set(shoes).then(function(){
				$window.location.href = "#!/levelmenu";
			});
		},
	    // Require Authentication
		requireAuth: function() {
	      return auth.$requireSignIn();
	    }, 
	    // Logout
	    logout: function() {
	      	auth.$signOut();
	      	$window.location.href="#!/login";
	    }
	}
	return service;
});
