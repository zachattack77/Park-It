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
    alert("Set parking location");
});

$("#retrieve").click(function() {
    alert("Get parking location");
});

$("#gotIt").click(function () {
    $("#instructions").slideUp();
});