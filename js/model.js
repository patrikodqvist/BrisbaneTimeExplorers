brissyGame.factory('Library',function ($resource,$cookieStore,$rootScope,$window) {
	//Loading Variable
	this.loaded = false;
	//To save elements from the randomfunction
	this.tempArray = [];
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

					if (year) {
						if (lng == 153.0 && lat == -27.5) {
							array[obj]["year"] = year;
							records.push(array[obj])
						}
					}
				}
			}
		}
		//Uses it in the random function
		var len = records.length;
		//For the while loop, Want it to be true when we have five unique objects
		var stop = false
		while (stop==false) {
			var obj = this.getRandomArbitrary(1,len);
			var object = records[obj];
			if (this.tempArray.length == 5) {
				stop=true;
			}
			else if (this.testId(object)) {
			}
			else {
				this.tempArray.push(records[obj]);
			}
		}
		$rootScope.recordsLists = this.tempArray;
		$window.location.href = "#!/character";	
	}

	//Tests that there are no duplicates and that none of them share the same cordiantes
	this.testId = function(obj) {
		var test = false;
		for (i in this.tempArray) {
			if (this.tempArray[i]["_id"]==obj["_id"]) {
				if (this.tempArray[i].lat == obj.lat && this.tempArray[i].long == obj.long) {
					test=true;
				}
				else {
					test=true;
				}
				
			}
			else if (this.tempArray[i].lat == obj.lat && this.tempArray[i].long == obj.long) {
				test=true;
			}
			else {
			}
		}
		return test;
	}

	//Real Estate Maps
	this.realEstate = $resource('https://data.gov.au/api/action/datastore_search?resource_id=:id&limit=200',{},{
		get: {}
	});
	//Queensland pictures
	this.queenslandPictures = $resource('https://data.gov.au/datastore/odata3.0/9913b881-d76d-43f5-acd6-3541a130853d?$top=5&$format=json',{},{
		get:{}
	});

	return this;
});