/*

JavaScript which waits for the DOM to load before attempting device GPS access.

First, it will attempt to access navigator.geolocation.getCurrentPosition() with three arguments:
- an object with configuration options -- gpsDeviceOptions in this demo
- a function to run if successful -- gpsDeviceSuccess() in this demo
- a function to run if not successful -- gpsDeviceFailure() in this demo

When navigator.geolocation.getCurrentPosition() is first accessed, the user will be asked to approve
permission to allow GPS access.

If it is approved and if the GPS responds within the prescribed timeout (5 seconds in this demo),
gpsDeviceSuccess() will be run, which then calls updateGeoDisplay().

If it is denied or does not respond within the timeout, gpsDeviceFailure() will be run, which in turn 
will initiate ipAPI() to get the device's estimated IP number using the IPify.org API, and then pass it
off to geolocationAPI() to estimate a geographic location using RapidAPI's WeatherAPI IP API endpoint, 
which then calls updateGeoDisplay().

*/

// configure options for JS device GPS access: high accuracy, 5-second timeout, no cached location data
const gpsDeviceOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

// run this if device GPS request approved and succesful
function gpsDeviceSuccess(data) {
    // lat and long are in data.coords.latitude and data.coords.longitude
    updateGeoDisplay("device gps", data.coords.latitude, data.coords.longitude);
}

// run this if device GPS request denied or failed
function gpsDeviceFailure(error) {
    console.warn("Error #" + error.code + ": " + error.message); // output warning to console
    ipAPI(); // initiate backup geolocation by ip number
}

// generic function to fetch data via AJAX
async function getData(url, opts) {
    try {
        const response = await fetch(url, opts);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw(response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

// use fetch AJAX to get IP number from ipify.org API
function ipAPI() {

    // configure API URL and options
    let ipifyURL = "https://api.ipify.org/?format=json";
    let ipifyOptions = {};

    // get data and then call geolocation API
    getData(ipifyURL, ipifyOptions).then(function(responseJSON) {
        console.log("IP number: " + responseJSON.ip);
        geolocationAPI(responseJSON.ip);
    });
}

// use fetch AJAX to get geolocation estimate from rapidapi.com API
function geolocationAPI(ipNumber) {

    // configure API URL and options
    const geoAPIUrl = 'https://weatherapi-com.p.rapidapi.com/ip.json?q=' + ipNumber;
    const geoAPIOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b1191f052bmsh9393381bd6d8022p103498jsna1764183a67a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    // get data and then call function to update the display.
    getData(geoAPIUrl, geoAPIOptions).then(function(responseJSON) {
        updateGeoDisplay("geolocation by ip number", responseJSON.lat, responseJSON.lon);
    });
}

// update the DOM with content provided by one of the methods
function updateGeoDisplay(method, lat, lon) {
    document.querySelector("#geoMethod span").innerHTML = method;
    document.querySelector("#latitude span").innerHTML = lat;
    document.querySelector("#longitude span").innerHTML = lon;
}

// don't do anything until the DOM loads
document.addEventListener("DOMContentLoaded", function () {

    // try to get GPS position; browser will ask user for permission
    // first two arguments are function names, third is the options object set up above
    navigator.geolocation.getCurrentPosition(gpsDeviceSuccess, gpsDeviceFailure, gpsDeviceOptions);

});
