brissyGame.controller('loginCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', 'Authentication', function($scope,$routeParams,$rootScope, Library, Authentication) {
	//Loading shall be false initially
	$rootScope.landmark=false;

	$scope.loading = false;
	//state chall be false
	$scope.state = false;

	$scope.changeState = function() {
		$scope.state = true;
	}
	$scope.login = function(username,password) {
		//creating a User Objebct for the Authentication
		var user = {email:username,
					password:password};
		Authentication.login(user);
		//Retriveing real Estate data
		var id = "f5ecd45e-7730-4517-ad29-73813c7feda8";
		Library.realEstate.get({id:id}, function(output) {
			$scope.loading=true;
			$scope.recordList = output.result.records;
			console.log(output.result.records);
			$rootScope.records = output.result.records;
			Library.sort(output.result.records);
		});
		Library.queenslandPictures.get({}, function(output) {
			console.log(output);
		})
	}
}]);
