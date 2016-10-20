

function init() {
	getMyLocation();
}





function getMyLocation(){

    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
        console.log("got position");
        console.log("position is LAT: " + position.coords.latitude
        	"LONG: " + position.coords.longitude);
        //getWeather(position.coords.latitude, position.coords.longitude);
}