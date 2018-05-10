var storage;

$("document").ready(init);

function init(){
    document.addEventListener("deviceready", onDeviceReady,false);
    storage = window.localStorage;
}

function onDeviceReady() {
    if(cordova.platform == 'ios'){
        $('head').append('<link rel="stylesheet" href="css/park-it-ios.css" type="text/css"/>');
        //prevents status bar from overlaying web view
        window.StatusBar.overlaysWebView(false);
        window.StatusBar.styleDefault();
    }
    else{
        $('head').append('<link rel="stylesheet" href="css/park-it-android.css" type="text/css"/>');
        window.StatusBar.backgroundColorByHexString("#1565C0");
    }
}

function setParkingLocation(){
    navigator.geolocation.getCurrentPosition(setParkingLocationSuccess,
        setParkingLocationError, {enableHighAccuracy:true});
}
function setParkingLocationSuccess(position){
    latitude = position.coords.latitude;
    storage.setItem("parkedLatitude", latitude);
    //add statements to store the longitute
    longitude = position.coords.longitude;
    storage.setItem("parkedLongitude", longitude);

    //display an alert that shows the latitude and longitude
    navigator.notification.alert("Parking location saved. (Lat: " + latitude + ", Long: " + longitude) + ")";
    showParkingLocation();
}

function setParkingLocationError(error){
    navigator.notification.alert("Error Code: " + error.code + "\nError Message: " + error.message);
}
function showParkingLocation(){
    navigator.notification.alert("You are parked at Lat: " + storage.getItem("parkedLatitude") + ", Long: " + storage.getItem("parkedLongitude"));
}


function initMap(){
    var grc = {lat: 47.313582, lng: -122.1800072};

    var mapDiv = new google.maps.Map (document.getElementById('map'), {
        zoom: 10,
        center: grc
    });

    var marker = new google.maps.Marker({
        position: grc,
        map: mapDiv
    });

}

$("#park").click(function () {
    setParkingLocation();
    //alert("Set parking location");
});

$("#retrieve").click(function() {
    alert("Get parking location");
});

$("#gotIt").click(function () {
    $("#instructions").slideUp();
});

$("#directions").ready(function () {
    $("#directions").hide();
});

$("#instructions").ready(function () {
    $("#instructions").hide();
});