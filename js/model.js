brissyGame.factory('Library',function ($resource,$cookieStore,$rootScope,$window) {
	//Loading Variable
	this.loading = false;
	this.loaded = false;
	this.mapLoad = false;
	this.progress=false;
	//Selected level
	this.level = "";
	//To save elements from the randomfunction
	this.tempArray = [];
	//Data
	this.dataSets = {};
	//Merges the screen
	this.mergeLists = function(realEstate,queenslandPictures,photographs) {
		this.dataSets = realEstate.concat(queenslandPictures).concat(photographs);	
	}
	//Search method Using Fuse.js
	this.search = function(word) {
		var options = {
			shouldSort: true,
			threshold: 0.6,
			location: 0,
			distance: 100,
			maxPatternLength: 32,
			minMatchCharLength: 1,
			keys: [
			"dc:title",
			"dc:description",
		]
		};		
		var fuse = new Fuse(this.dataSets, options); 
		var result = fuse.search(word);
		return result;
	}
	//Finds specific object for detailView
	this.findObject = function(id, title) {
		var object = {};
		for (var i=0; i < this.dataSets.length; i++) {
			if (this.dataSets[i]["_id"]==id && this.dataSets[i]["dc:title"] == title) {
				object = this.dataSets[i];
				
			}
		}
		return object;
	}
	//Randints 
	this.getRandomArbitrary = function(min, max) {
  		return parseInt(Math.random() * (max - min) + min);
	}
	//cluePlacer 
	this.cluePlacer = function(markers, ids) {
		var placement = true;
		var len = markers.length;
		var numClues = 0;
		oldID = "";
		returnIDS = ids;

		for (var i=0; i<len; i++) {
			if (i==2) {
				returnIDS = this.addClueToMarker(i, returnIDS, 1);
			}
			else if (i==3) {
				returnIDS = this.addClueToMarker(i, returnIDS, 2);
			}
		} 
		return returnIDS;
	}
	//Gives the marker the clue
	this.addClueToMarker = function(clue, ids, num) {
		var counter = 0;
		angular.forEach(ids, function(key,value) {
			if (counter == clue) {
				key.clue = num;
				counter+=1;
			}
			else {
				counter+=1;
			}
		});
		return ids;
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
	//-27.46794, 153.02809 Brisbane coordinates
	this.sort = function(array) {
		var records = [];
		for (obj in array) {
			var yearS = array[obj]["dcterms:temporal"];
			if (yearS) {
				var year = this.getYear(yearS);
			}
			else if (array[obj]["temporal"]) {
				var yearS = array[obj]["temporal"];
				var year = this.getYear(yearS);
			}
			var test = array[obj]["dcterms:spatial"];
			if (test) {
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
			else if (array[obj]["spatial"]) {
				var location = array[obj]["spatial"].split(';');
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
								array[obj]["dc:title"] = array[obj].title
								array[obj]["dc:description"] = array[obj].description
								array[obj]["150_pixel_jpg"] = array[obj]["150_pixel"];
								array[obj]["1000_pixel_jpg"] = array[obj]["1000_pixel"];
								records.push(array[obj])
							}
						}
					}
				}
			}
		}
		return records;
	}
	//Picks out random markers
	this.randomMarkers = function(records) {
		//ids is an object that will have the information of the id and if the landmark is completed
		var ids = {};
		//Uses it in the random function
		var len = records.length;
		var end = 5;
		//end is extended since we need four levels from three datasets
		if (len > 60) {
			end=10;
		}
		//For the while loop, Want it to be true when we have five unique objects
		var index = 0;
		var stop = false
		while (stop==false) {
			var obj = this.getRandomArbitrary(1,len);
			var object = records[obj];
			if (this.tempArray.length == end) {
				stop=true;
			}
			else if (this.testId(object)) {
			}
			else {

				ids["" + index] = {
					id:records[obj]["_id"],
					completed: false,
					clue: ""
				}
				this.tempArray.push(records[obj]);
				index+=1;
			}
		}
		var returnArray = this.tempArray;
		this.tempArray = [];
		return [returnArray, ids];	
	}
	//Retrieve old markers
	this.loadOldMarkers = function(markers,array) {
		var list = [];
		//Angular foreach is to itterate over attributes within a object
		angular.forEach(markers, function(value, key) {
			for (var marker=0; marker < array.length; marker++) {
				if (value.id == array[marker]["_id"]) {
					list.push(array[marker]);
				}
			}
		});
		return list;
	}
	//Changes the state of the markers
	this.markerChangeState = function(id, markers) {
		angular.forEach(markers, function(value, key) {
			if (value.id == id) {
				value.completed=true;
			}
		});
		return markers;
	}
	//Id validator for markers
	this.idValidator = function(id, markers) {
		var test = false;
		angular.forEach(markers, function(value, key) {
			if (value.id == id) {
				if (value.completed==true) {
					test=true
				}
			}
		});
		return test;
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
	this.realEstate = $resource('https://data.gov.au/api/action/datastore_search?resource_id=:id&limit=1000',{},{
		get: {}
	});
	//Queensland pictures
	this.queenslandPictures = $resource('https://data.gov.au/api/action/datastore_search?resource_id=:id&limit=1000',{},{
		get:{}
	});
	//photographs
	this.photographs = $resource('https://data.gov.au/api/action/datastore_search?resource_id=:id&limit=1000',{},{
		get:{}
	});

	return this;
});