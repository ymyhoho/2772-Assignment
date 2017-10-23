
      var map;
      //creating the map
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: new google.maps.LatLng(-34.922763,138.603258),
          mapTypeId: 'terrain'
        });
 
        //get location information from maps.json
        var script = document.createElement('script');

        script.src = 'maps.json';

        document.getElementsByTagName('head')[0].appendChild(script);
      }

      //creating a for loop to make the marker on map and get information from json at same time
      window.feed_callback = function addMarker(results) {
        for (var i = 0; i < results.features.length; i++) {
          //define the the coordinates
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[0],coords[1]);
          var marker = new google.maps.Marker({position: latLng, map: map});
          //get youtube video link
          var video = '<div><iframe width="300" height="200" src="https://www.youtube.com/embed/'
                    +results.features[i].properties.InfoWindowUrl+'?rel=0" frameborder="0" allowfullscreen></iframe></div>';          
          var content = results.features[i].properties.place + results.features[i].properties.info + video ;
          //display the information window when user click on the marker
          var infowindow = new google.maps.InfoWindow();
          google.maps.event.addListener(marker,'click', (function(marker, content){
          return function(){
            infowindow.setContent(content);
            infowindow.open(map, marker);
          };
            })(marker, content));
        }
    
          
      }
      google.maps.event.addDomListener(window,'load',initialize);