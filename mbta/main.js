
	var myLat = 0;
	var myLng = 0;
	var request = new XMLHttpRequest();
	var me = new google.maps.LatLng(myLat, myLng);

	var myOptions = {
		zoom: 12, // The larger the zoom number, the bigger the zoom	
		center: me,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map;
	var marker;
	var infowindow = new google.maps.InfoWindow();

	// Coords following Redline from Alewife to JFk/UMass
	var preForkCoords = [
	{lat: 42.395428, lng: -71.142483},
	{lat: 42.39674, lng: -71.121815},
	{lat: 42.3884, lng: -71.11914899999999},
	{lat: 42.373362, lng: -71.118956},
	{lat: 42.365486, lng: -71.103802},
	{lat: 42.36249079, lng: -71.08617653},
	{lat: 42.361166, lng: -71.070628},
	{lat: 42.35639457 , lng: -71.0624242},
	{lat: 42.355518, lng: -71.060225},
	{lat: 42.352271, lng:-71.05524200000001},
	{lat: 42.342622, lng: -71.056967},
	{lat: 42.330154, lng: -71.057655},
	{lat: 42.320685, lng: -71.052391}
	];

	var braintreeForkCoords = [
	{lat: 42.320685, lng: -71.052391},
	{lat: 42.275275, lng: -71.029583},
	{lat: 42.2665139, lng: -71.0203369},
	{lat: 42.251809, lng: -71.005409},
	{lat: 42.233391, lng: -71.007153},
	{lat: 42.2078543, lng: -71.0011385}
	];

	var ashmontForkCoords = [
	{lat: 42.320685, lng: -71.052391},
	{lat: 42.31129 , lng: -71.053331},
	{lat: 42.300093, lng: -71.061667},
	{lat: 42.29312583, lng: -71.06573796000001},
	{lat: 42.284652, lng: -71.06448899999999}
	];

	var preForkPath = new google.maps.Polyline({
		path: preForkCoords,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight : 2.5
	});
	var braintreeForkPath = new google.maps.Polyline({
		path: braintreeForkCoords,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight : 2.5
	});
	var ashmontForkPath = new google.maps.Polyline({
		path: ashmontForkCoords,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight : 2.5
	});



	var RedLine = [
	{ sname:'South Station', lat:42.352271, lng:-71.05524200000001},
	{ sname:'Andrew', lat:42.330154, lng:-71.057655},
	{ sname:'Porter Square', lat:42.3884, lng:-71.11914899999999},
	{ sname:'Harvard Square', lat:42.373362, lng:-71.118956},
	{ sname:'JFK/UMass', lat:42.320685, lng:-71.052391},
	{ sname:'Savin Hill', lat:42.31129 , lng:-71.053331},
	{ sname:'Park Street', lat:42.35639457 , lng:-71.0624242},
	{ sname:'Broadway', lat:42.342622, lng:-71.056967},
	{ sname:'North Quincy', lat:42.275275, lng:-71.029583},
	{ sname:'Shawmut', lat:42.29312583, lng:-71.06573796000001},
	{ sname:'Davis', lat:42.39674, lng:-71.121815},
	{ sname:'Alewife', lat:42.395428, lng:-71.142483},
	{ sname:'Kendall/MIT', lat:42.36249079, lng:-71.08617653},
	{ sname:'Charles/MGH', lat:42.361166, lng:-71.070628},
	{ sname:'Downtown Crossing', lat:42.355518, lng:-71.060225},
	{ sname:'Quincy Center', lat:42.251809, lng:-71.005409},
	{ sname:'Quincy Adams', lat:42.233391, lng:-71.007153},
	{ sname:'Ashmont', lat:42.284652, lng:-71.06448899999999},
	{ sname:'Wollaston', lat:42.2665139, lng:-71.0203369},
	{ sname:'Fields Corner', lat:42.300093, lng:-71.061667},
	{ sname:'Central Square', lat:42.365486, lng:-71.103802},
	{ sname:'Braintree', lat:42.2078543, lng:-71.0011385}
	];


	/**
		Getter function finds the lat,long data associated with a T-Stop name
		Args: A station name 
		Return: Data object corresponding to the station location
	*/
	function getStationObject (stationName) {

		for (i = 0; i < RedLine.length; i++){
			if (RedLine[i].sname == stationName){
				return RedLine[i];
			}
		}
	}


			
	function init()
	{
		map = new google.maps.Map(document.getElementById("map"), myOptions);
		getMyLocation();

	}
			
	function getMyLocation() {
		if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
			navigator.geolocation.getCurrentPosition(function(position) {
				myLat = position.coords.latitude;
				myLng = position.coords.longitude;
				renderMap();
			});
		}
		else {
			alert("Geolocation is not supported by your web browser.  Darn!");
		}
	}

	var image = new google.maps.MarkerImage(
  		'marker-images/image.png',
 		new google.maps.Size(15,15),
  		new google.maps.Point(0,0),
  		new google.maps.Point(8,15)
	);
	
	var shadow = new google.maps.MarkerImage(
  		'marker-images/shadow.png',
  		new google.maps.Size(27,15),
  		new google.maps.Point(0,0),
  		new google.maps.Point(8,15)
	);
	function addMarker (locationName) {
		//console.log("locationname is: " + locationName);
		//console.log("lat is:" + getStationObject(locationName).lat + " long is:" + getStationObject(locationName).lng);
		var marker = new google.maps.Marker({

			
			position : new google.maps.LatLng(getStationObject(locationName).lat, getStationObject(locationName).lng),
			icon : image,
			shadow : shadow,
			map: map
		});
		marker.setMap(map);

	}	
	Array.prototype.min = function() {
  		return Math.min.apply(null, this);
	};

	function meterstomiles(meters){
		var miles = meters/1609.344;
		miles = Math.ceil(miles);
		return miles;
	}
	function findNearestStopFrom (){
		var distances=[];
		var tStop;
		var temp;
		var closestStop;
		var min = google.maps.geometry.spherical.computeDistanceBetween(me, new google.maps.LatLng(RedLine[0].lat, RedLine[0].lng));
		
		for (i = 0; i < RedLine.length; i++){
			tStop = new google.maps.LatLng(RedLine[i].lat, RedLine[i].lng);
			temp = {distance: google.maps.geometry.spherical.computeDistanceBetween(me, tStop), tstop: RedLine[i].sname};
			distances[i] = temp;

			console.log("Distance is: " + temp.distance + "sname of that is: " + temp.tstop);	
			
			if (distances[i].distance < min){
				min = distances[i].distance;
				closestStop = distances[i];	
				console.log("the new minimum is: " + distances[i].distance + "Name: " + distances[i].tstop);
			}
		}
		closestStop.distance = meterstomiles(closestStop.distance);
		
		return closestStop;
	}

	function renderMap()
	{
		

		me = new google.maps.LatLng(myLat, myLng);
		var closeStation = findNearestStopFrom();
				
		// Update map and go there...
		map.panTo(me);

		for (i = 0; i < RedLine.length; i++){
		//console.log("Station Name: " + RedLine[i].name + " lat is:" + getStationObject(RedLine[i].name).lat + " long is:" + getStationObject(RedLine[i].name).lng);
		//console.log ("Passing in station name: " + RedLine[i].name);
			addMarker(RedLine[i].sname);
		}
	
		// Create a marker
		marker = new google.maps.Marker({
			position: me,
			title: "The closest MBTA Red Line station is " + closeStation.tstop 
					+ " which is " + closeStation.distance + " mi away from" 
					+ " your current location"
		});
		marker.setMap(map);

		 var closeStationCoords = [
          {lat: myLat, lng: myLng},
          {lat: getStationObject(closeStation.tstop).lat, lng: getStationObject(closeStation.tstop).lng}
        ];

		var closeStationPath = new google.maps.Polyline({
			path: closeStationCoords,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight : 2.5
	});

					
		// Open info window on click of marker
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(marker.title);
			infowindow.open(map, marker);
		});
		ashmontForkPath.setMap(map);
		braintreeForkPath.setMap(map);
		preForkPath.setMap(map);
		closeStationPath.setMap(map);
	}
		










