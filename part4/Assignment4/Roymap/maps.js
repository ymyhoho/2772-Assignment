
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: new google.maps.LatLng(-34.922763,138.603258),
          mapTypeId: 'terrain'
        });
 

        var script = document.createElement('script');

        script.src = 'maps.json';

        document.getElementsByTagName('head')[0].appendChild(script);
      }


      window.eqfeed_callback = function addMarker(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[0],coords[1]);
          var marker = new google.maps.Marker({position: latLng, map: map});
          var video = '<div><iframe width="300" height="200" src="https://www.youtube.com/embed/'
                    +results.features[i].properties.InfoWindowUrl+'?rel=0" frameborder="0" allowfullscreen></iframe></div>';
          var contentString = results.features[i].properties.place + results.features[i].properties.info + video + results.features[i].videoUrl;
          var infoWindow = new google.maps.InfoWindow({content: contentString});
          marker.addListener('click', function(){
          infoWindow.open(map, this)});
        }
    
          
      }
      