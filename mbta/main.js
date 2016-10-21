
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
	]

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
	{ name:'South Station', lat: 42.352271, lng:-71.05524200000001},
	{ name:'Andrew', lat: 42.330154, lng: -71.057655},
	{ name:'Porter Square', lat: 42.3884, lng: -71.11914899999999},
	{ name:'Harvard Square', lat: 42.373362, lng: -71.118956},
	{ name:'JFK/UMass', lat: 42.320685, lng: -71.052391},
	{ name:'Savin Hill', lat: 42.31129 , lng: -71.053331},
	{ name:'Park Street', lat: 42.35639457 , lng: -71.0624242},
	{ name:'Broadway', lat: 42.342622, lng: -71.056967},
	{ name:'North Quincy', lat: 42.275275, lng: -71.029583},
	{ name:'Shawmut', lat: 42.29312583, lng: -71.06573796000001},
	{ name:'Davis', lat: 42.39674, lng: -71.121815},
	{ name:'Alewife', lat: 42.395428, lng: -71.142483},
	{ name:'Kendall/MIT', lat: 42.36249079, lng: -71.08617653},
	{ name:'Charles/MGH', lat: 42.361166, lng: -71.070628},
	{ name:'Downtown Crossing', lat: 42.355518, lng: -71.060225},
	{ name:'Quincy Center', lat: 42.251809, lng: -71.005409},
	{ name:'Quincy Adams', lat: 42.233391, lng: -71.007153},
	{ name:'Ashmont', lat: 42.284652, lng: -71.06448899999999},
	{ name:'Wollaston', lat: 42.2665139, lng: -71.0203369},
	{ name:'Fields Corner', lat: 42.300093, lng: -71.061667},
	{ name:'Central Square', lat: 42.365486, lng: -71.103802},
	{ name:'Braintree', lat: 42.2078543, lng: -71.0011385}
	];
	/**
		Getter function finds the lat,long data associated with a T-Stop name
		Args: A station name 
		Return: Data object corresponding to the station location
	*/
	function getStationObject (stationName) {

		for (i = 0; i < RedLine.length; i++){
			if (RedLine[i].name == stationName){
				return RedLine[i];
			}
		}
	}


			
	function init()
	{
		map = new google.maps.Map(document.getElementById("map"), myOptions);
		getMyLocation();
		console.log("lat is: " + getStationObject("Ashmont").lat + "long is: " + getStationObject("Ashmont").lng);
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

	function renderMap()
	{
		me = new google.maps.LatLng(myLat, myLng);
				
		// Update map and go there...
		map.panTo(me);
	
		// Create a marker
		marker = new google.maps.Marker({
			position: me,
			title: "Here I Am!"
		});
		marker.setMap(map);
					
		// Open info window on click of marker
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(marker.title);
			infowindow.open(map, marker);
		});
		ashmontForkPath.setMap(map);
		braintreeForkPath.setMap(map);
		preForkPath.setMap(map);
	}
		










