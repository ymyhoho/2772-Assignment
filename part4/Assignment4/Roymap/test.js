var map; function initialize() {         
	var myLatlng = new google.maps.LatLng(39.9629, 116.3581);         
	var myOptions = { zoom: 16,center: myLatlng,             
		mapTypeId: google.maps.MapTypeId.ROADMAP}          
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);         
	var image='Image/webcam.png';          
	
	for(var j=0;j<latlng.length;j++){          
	var marker1 = new google.maps.Marker({position: latlng[j],             
	map: map,            
	icon:image,          
	title:j+"号摄像头"+"("+jingdu[j]+","+weidu[j]+")"})          
	showinfomessage(marker1,j); }
} 
	
	function showinfomessage(marker,number){
		var infowindow = new google.maps.InfoWindow(       
		{content: number+"号摄像头" });     
		google.maps.event.addListener(marker, 'click', function(event) {get_marker_id(event.latLng);      
		infowindow.open(map,marker);ShowLogin();
	});
	}