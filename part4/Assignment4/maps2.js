 var map;
      
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: new google.maps.LatLng(-34.922763,138.603258),
		mapTypeId: 'terrain'
	});
	var script = document.createElement('script');
	script.src = 'maps.json';
	document.getElementsByTagName('head')[0].appendChild(script);
}