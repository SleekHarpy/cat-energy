function initMap()
{
  var element = document.querySelector(".location__map");
  var options = {
    zoom: 17,
    center: {lat: 59.9387942, lng: 30.3230833},
    disableDefaultUI: true
  };

  var mainMap = new google.maps.Map(element, options);

  var marker = new google.maps.Marker({
    position: {lat: 59.9387942, lng: 30.3230833},
    map: mainMap,
    icon: "../img/map-pin.png"
  });
}
