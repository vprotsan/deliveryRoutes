let driverPath = []

const createMap = ({ lat, lng }) => {
  return new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 15,
    styles: mapStyles
  });
};

const createMarker = ({ map, position, icon }) => {
  return new google.maps.Marker({ map, position, icon });
};

// const getCurrentPosition = ({ onSuccess, onError = () => { } }) => {
//   if ('geolocation' in navigator === false) {
//     return onError(new Error('Geolocation is not supported by your browser.'));
//   }
//
//   return navigator.geolocation.getCurrentPosition(onSuccess, onError);
// };

// New function to track user's location.
const trackLocation = ({ onSuccess, onError = () => { } }) => {
  if ('geolocation' in navigator === false) {
    return onError(new Error('Geolocation is not supported by your browser.'));
  }

  // Use watchPosition instead.
  return navigator.geolocation.watchPosition(onSuccess, onError,{
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  });
};


const getPositionErrorMessage = code => {
  switch (code) {
    case 1:
      return 'Permission denied.';
    case 2:
      return 'Position unavailable.';
    case 3:
      return 'Timeout reached.';
    default:
      return null;
  }
}

function init() {

  let custPosition = { lat: 30.317598, lng: -81.4557006 }
  let driverPosition = { lat: 30.3166771, lng: -81.4719205 }
  let storePosition = { lat: 30.3166771, lng: -81.4719205 }

  driverPath.push(driverPosition)
  console.log(driverPath)

  // here is standart collection of deliveryCoordinates
  // http://kml4earth.appspot.com/icons.html
  const map = createMap(custPosition);
  let custMarker = createMarker({ map, position: custPosition, icon: 'https://maps.google.com/mapfiles/kml/pal3/icon23.png' });
  let driverMarker = createMarker({ map, position: driverPosition, icon: 'http://maps.google.com/mapfiles/kml/pal4/icon54.png' });
  let storeMarker = createMarker({ map, position: storePosition, icon: 'http://maps.google.com/mapfiles/kml/pal4/icon21.png' });

  // Get user's location
  trackLocation({
    onSuccess: ({ coords: { latitude: lat, longitude: lng } }) => {
      driverMarker.setPosition({ lat, lng });
      map.panTo({ lat, lng });
      driverPath.push({ lat, lng })
    },
    onError: err =>
      alert(`Error: ${getPositionErrorMessage(err.code) || err.message}`)
  });
}


//map styles
const mapStyles = [
      { elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'},{visibility: 'off'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'},{visibility: 'off'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.business',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.government',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.medical',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.school',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.sports_complex',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.place_of_worship',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'},{visibility: 'off'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'},{visibility: 'off'}]
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'},{visibility: 'off'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'},{visibility: 'off'}]
      }
  ]
