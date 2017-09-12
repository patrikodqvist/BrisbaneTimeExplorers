brissyGame.controller('loginCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', 'Authentication', function($scope,$routeParams,$rootScope, Library, Authentication) {


	$scope.login = function(username,password) {
		var idnr = 'f5ecd45e-7730-4517-ad29-73813c7feda8'
		Library.search.get({id:idnr}, function(output) {
			$scope.recordList = output.result.records;
			$rootScope.records = output.result.records;
			Library.sort(output.result.records);
		});
		console.log(username,password);
		var user = {email:username,
					password:password};
		Authentication.login(user);

	}



}]);
