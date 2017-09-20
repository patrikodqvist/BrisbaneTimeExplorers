brissyGame.factory('Library',function ($resource,$cookieStore,$rootScope,$window) {
	//Loading Variable
	this.loaded = false;

	//Randints 
	this.getRandomArbitrary = function(min, max) {
  			return parseInt(Math.random() * (max - min) + min);
		}

	//Finds the year of the data string
	this.getYear = function(string) {
		var end = false;
		var counter = 0;
		var length = string.length;
		var year = "";
		while (end == false) {
			if (year.length == 5) {
				end=true;
			}
			else if (counter == length) {
				end=true;	
			}
			else if (Number.isInteger(Number(string[counter]))) {
				year += string[counter];
				counter +=1;
			}
			else {
				counter+=1;
				year="";
			}
		}
		return Number(year);
	}

	//Adds the year and cordinates as attributes to the objects
	//-27.46794, 153.02809 brisbane coordinates
	this.sort = function(array) {
		//console.log("hej");
		var records = [];
		for (obj in array) {
			var yearS = array[obj]["dcterms:temporal"];
			if (yearS) {
				var year = this.getYear(yearS);
			}
			var location = array[obj]["dcterms:spatial"].split(';');
			if (location[1]) {
				var longlat = location[1].split(',');
				if (longlat.length == 2) {
					array[obj]["lat"] = Number(longlat[0]);
					array[obj]["long"] = Number(longlat[1]);
					var lat = Math.round(array[obj].lat*10)/10;
					var lng = Math.round(array[obj].long*10)/10;
					//console.log([lat,lng]);

					if (year) {
						if (lng == 153.0 && lat == -27.5) {
							array[obj]["year"] = year;
							records.push(array[obj])
						}
						
					}
				}
			}
			else {
				//console.log(location);
			}	
		}

		var len = records.length;
		test = [];

		for (i = 0; i < 4; i++) {

			var obj = this.getRandomArbitrary(1,len);
			test.push(records[obj]);

		}
		//console.log(records);
		$rootScope.recordsLists = test;
		$window.location.href = "#!/charcter";	
	}

	//Real Estate Maps
	this.realEstate = $resource('http://data.gov.au/api/action/datastore_search?resource_id=:id&limit=200',{},{
		get: {}
	});
	//Queensland pictures
	this.queenslandPictures = $resource('http://data.gov.au/datastore/odata3.0/9913b881-d76d-43f5-acd6-3541a130853d?$top=5&$format=json',{},{
		get:{}
	});


	//Old searches---------------------------------------------------->
	this.maps = $resource('http://data.gov.au/datastore/odata3.0/:id?$top=5&$format=json', {}, {
		get: {}
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
	//will go over above-------------------------------------------------->	
	return this;
});