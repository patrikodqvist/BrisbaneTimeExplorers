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

	$scope.sort = function(number) {
		var list = [];
		for (obj in $scope.recordList) {
			var test = $scope.recordList[obj]["dcterms:temporal"];
			$scope.getYear(test);

			if (test == number) {
				list.push(obj);
			}
		}
		
	}

	$scope.getYear = function(string) {
		var end = false
		var counter = 0;
		var length = string.length();
		console.log(length);
		while (end == false) {
			if (counter == length) {
				end = true;
			}
			char = string[0];
			console.log(char);
			counter +=1;
		}


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