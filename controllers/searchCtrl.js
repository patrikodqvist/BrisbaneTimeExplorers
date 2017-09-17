brissyGame.controller('searchCtrl', ['$scope', '$routeParams', '$rootScope', 'Library', function($scope,$routeParams,$rootScope, Library) {
	$rootScope.realMaps = false;
	$scope.search = function() {
		$scope.realMaps = true;
		var idnr = 'f5ecd45e-7730-4517-ad29-73813c7feda8'
		Library.search.get({id:idnr}, function(output) {
			$scope.recordList = output.result.records;
			console.log($scope.recordList);
		});
	}

	$scope.maps = function() {
		$scope.realMaps = true;
		var key = '46fc1185-d837-46e7-9142-7224efa9ccdd';
		Library.maps.get({id:key}, function(output) {
			$scope.recordList = output.value;
			console.log(output.value);

		})
	}

	$scope.pictures = function() {
		$scope.realMaps = true;
		Library.pictures.get({}, function(output) {
			console.log(output.value);
			$scope.recordList = output.value;
		})
	}

	$scope.wwOne = function() {
		$scope.realMaps = true;
		Library.wwOneRecords.get({}, function(output) {
			console.log(output.value);
			//$scope.recordList = output.value;
		})
	}

	$scope.wwOnePictures = function() {
		$scope.realMaps = true;
		Library.wwOnePictures.get({}, function(output) {
			console.log(output.value);
			//$scope.recordList = output.value;
		})
	}

	$scope.convicts = function() {
		$scope.realMaps = true;
		Library.convicts.get({}, function(output) {
			console.log(output.value);
			//$scope.recordList = output.value;
		})
	}

	$scope.miningAccidents = function() {
		$scope.realMaps = true;
		Library.miningAccidents.get({}, function(output) {
			console.log(output.value);
			//$scope.recordList = output.value;
		})
	}

	$scope.newsPapers = function() {
		$scope.realMaps = true;
		Library.newsPapers.get({}, function(output) {
			console.log(output.value);
			//$scope.recordList = output.value;
		})
	}
}]);