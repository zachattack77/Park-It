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