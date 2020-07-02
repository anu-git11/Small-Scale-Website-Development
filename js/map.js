// Added Google Maps function
"use strict";
var map;
var markerLabel = "Java House Washington DC"
function myMap() {
var JavaHouse = new google.maps.LatLng(38.9113649,-77.0403386);
var mapProp = {
      center:JavaHouse,
      zoom:18,
      scrollwheel:true,
      draggable:true,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    //added resize function for center
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
});
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h5 id="firstHeading" class="firstHeading">Java House Washington DC</h5>'+
            '<div id="bodyContent">'+
            '<p><b>Java House</b>, located at <b>DuPont Circle, Washington, DC</b>, is a coffee ' +
            'roasting facility and coffee house founded in 1990 by 3 Yazdani brothers '+
            'Java House offers premium roasted coffee from coastal regions '+
            ' of Jamaica, Ecuador, and the Sumatra regions of western Indonesia. '+
            ' Java House coffee is served in some of the finest coffee houses '+
            'and restaurants from all over the world. </p>'+
            '</div>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        var marker = new google.maps.Marker({
          position: JavaHouse,
          map: map,
          title: 'Java House Washington DC',
		  icon: {
					labelOrigin: new google.maps.Point(16,64),
					url: "images/marker.png"
				},
		  label: {
					text: markerLabel,
					color: "black",
					fontSize: "14px",
					fontWeight: "bold"
				  }
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
