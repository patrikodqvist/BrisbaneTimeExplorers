brissyGame.factory('Library',function ($resource,$cookieStore,$rootScope) {
	
	this.search = $resource('http://data.gov.au/api/action/datastore_search?resource_id=:id&limit=5'
,{},{
		get: {}
	});

	this.maps = $resource('http://data.gov.au/datastore/odata3.0/:id?$top=5&$format=json', {}, {
		get: {}
	});

	this.pictures = $resource('http://data.gov.au/datastore/odata3.0/9913b881-d76d-43f5-acd6-3541a130853d?$top=5&$format=json',{},{
		get:{}
	});

	this.wwOneRecords = $resource('http://data.gov.au/datastore/odata3.0/deea2f8b-7ecc-427b-9529-973bc42dfbed?$top=5&$format=json',{},{
		get:{}
	});

	this.wwOnePictures = $resource('http://data.gov.au/datastore/odata3.0/cf6e12d8-bd8d-4232-9843-7fa3195cee1c?$top=5&$format=json',{},{
		get:{}
	});

	this.convicts = $resource('http://data.gov.au/datastore/odata3.0/6ab35f9a-e476-4d29-84de-2e18d1e704c7?$top=5&$format=json',{},{
		get:{}
	});

	this.miningAccidents = $resource('http://data.gov.au/datastore/odata3.0/63fd8050-0bab-4c04-b837-b2ce664077bf?$top=5&$format=json',{},{
		get:{}
	});

	this.newsPapers = $resource('http://data.gov.au/datastore/odata3.0/deea2f8b-7ecc-427b-9529-973bc42dfbed?$top=5&$format=json',{},{
		get:{}
	});

	this.sort = function(array) {
		for (obj in array) {
			//["dcterms:spatial"]
			var location = array[obj]["dcterms:spatial"].split(';');
			var longlat = location[1].split(',');
			array[obj]["lat"] = Number(longlat[0]);
			array[obj]["long"] = Number(longlat[1]);
		}
		$rootScope.recordsLists = array;	
	}
	return this;
});