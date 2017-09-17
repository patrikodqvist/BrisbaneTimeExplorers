brissyGame.factory('Authentication',function ($rootScope,$resource,$cookieStore,$firebaseArray,$firebaseObject,$firebaseAuth,$window) {
	var ref = firebase.database().ref("users");
	var object = $firebaseObject(ref);
	var auth = $firebaseAuth();

	auth.$onAuthStateChanged(function(authUser) {
	    if(authUser) {
	      var userRef = ref.child(authUser.uid);
	      var userObj = $firebaseObject(userRef);
	      $rootScope.currentUser = userObj;
	      console.log($rootScope.currentUser);
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
			//$window.location.href="#!/home"
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
					stories: '',
					position: '',
					host: '',
				});
				service.login(user);
			}).catch(function(error) {
				console.log(error);
				$rootScope.errorMessage= error.message;
			});
	},
    // Require Authentication
	requireAuth: function() {
      return auth.$requireSignIn();
    }, 
    // Logout
    logout: function() {
    	console.log("hej");
      	auth.$signOut();
      	$window.location.href="#!/login";

    }, 
}
	return service;
});
