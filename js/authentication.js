brissyGame.factory('Authentication',function ($rootScope,$resource,$cookieStore,$firebaseArray,$firebaseObject,$firebaseAuth,$window) {
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
				$rootScope.loggedIn = true;
				var userRef = ref.child(user.uid);
	      		var userObj = $firebaseObject(userRef);
	      		$rootScope.currentUser = userObj;
				if ($rootScope.loads == 3) {
					$window.location.href = "#!/loading"; 
				}
			}).catch(function(error) {
				$rootScope.errorMessage = error.message;
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
				ref.child($rootScope.currentUser.id).child("levelFour").set(markers);
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
