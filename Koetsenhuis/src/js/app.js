'use strict';

let docid = document.getElementsByTagName("body")[0].getAttribute("id");

if (docid == "menu") {
    const renderMenu = require('./menu/render.menu');
}
if(docid == "index"){
    console.log("bla");
    initMap();
}



function initMap(){

    

    var element = document.getElementById("map");
    console.log(element);

    var uluru = {
        lat: 51.176629,
        lng: 3.153929
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}