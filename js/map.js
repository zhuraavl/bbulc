  jQuery(document).ready(function () {
    function initialize() {
      var style = [
      {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#12608d"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      }
  ];
      var settings = {
        zoom: 2,
        center: overview,
        mapTypeId: MY_MAPTYPE_ID,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: false,
        scaleControl: false
      };
      map = new google.maps.Map(document.getElementById("map"), settings);
      var n = new google.maps.StyledMapType(style);
      var image = 'media/img-p/pin.svg';
      map.mapTypes.set(MY_MAPTYPE_ID, n);

      var moscow = '<div class="mapwrap">' + '<h4 class="mapheading">Moscow</h4>' + "</div>";
      var kyiv = '<div class="mapwrap">' + '<h4 class="mapheading">Kyiv</h4>' + "</div>";
      var athens = '<div class="mapwrap">' + '<h4 class="mapheading">Athens</h4>' + "</div>";
      var tbilisi = '<div class="mapwrap">' + '<h4 class="mapheading">Tbilisi</h4>' + "</div>";
      var batumi = '<div class="mapwrap">' + '<h4 class="mapheading">Batumi</h4>' + "</div>";


      var mapMoscow = new google.maps.InfoWindow({
        content: moscow
      });
      var mapKyiv = new google.maps.InfoWindow({
        content: kyiv
      });
      var mapAthens = new google.maps.InfoWindow({
        content: athens
      });
      var mapTbilisi = new google.maps.InfoWindow({
        content: tbilisi
      });
      var mapBatumi = new google.maps.InfoWindow({
        content: batumi
      });


      var markerMoscow = new google.maps.Marker({
        position: positionMoscow,
        map: map,
        title: "Moscow",
        icon: image
      });
      var markerKyiv = new google.maps.Marker({
        position: positionKyiv,
        map: map,
        title: "Kyiv",
        icon: image
      });
      var markerAthens = new google.maps.Marker({
        position: positionAthens,
        map: map,
        title: "Athens",
        icon: image
      });
      var markerTbilisi = new google.maps.Marker({
        position: positionTbilisi,
        map: map,
        title: "Tbilisi",
        icon: image
      });
      var markerBatumi = new google.maps.Marker({
        position: positionBatumi,
        map: map,
        title: "Batumi",
        icon: image
      });


      google.maps.event.addListener(markerMoscow, "click", function () {
        mapMoscow.open(map, markerMoscow)
      });
      google.maps.event.addListener(markerKyiv, "click", function () {
        mapKyiv.open(map, markerKyiv)
      });
      google.maps.event.addListener(markerAthens, "click", function () {
        mapAthens.open(map, markerAthens)
      });
      google.maps.event.addListener(markerTbilisi, "click", function () {
        mapTbilisi.open(map, markerTbilisi)
      });
      google.maps.event.addListener(markerBatumi, "click", function () {
        mapBatumi.open(map, markerBatumi)
      });

    }
    window.onload = function () {
      initialize()
    };
    var map;
    var overview = new google.maps.LatLng(44.956881, 34.111273);
    var MY_MAPTYPE_ID = "Locations";
    var positionMoscow = new google.maps.LatLng(55.757202, 37.619940); // Moscow
    var positionKyiv = new google.maps.LatLng(50.463807, 30.517383); // Kyiv
    var positionAthens = new google.maps.LatLng(37.983391, 23.722374); // Athens
    var positionTbilisi = new google.maps.LatLng(41.730837, 44.826484); // Tbilisi
    var positionBatumi = new google.maps.LatLng(41.620843, 41.621552); // Batumi

  });