'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VybGlua2F1ciIsImEiOiJjbHExYjM4cHUwNzE3MnBud25qNDlmc2VjIn0.Jeu9BD0h1vILAwXce8dQqw'; // Replace this

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [0, 0],
  zoom: 14,
  pitch: 40
});

const marker = new mapboxgl.Marker({ color: '#2f54eb' });

const options = {
  enableHighAccuracy: true
};

function getLocation(position) {
  let { latitude, longitude } = position.coords;
  map.setCenter([longitude, latitude]);
  marker.setLngLat([longitude, latitude]).addTo(map);
}

function errorHandler() {
  console.log('Unable to retrieve your location.');
}

function disableMapControls() {
  map.dragPan.disable();
  map.keyboard.disable();
  map.scrollZoom.disable();
  map.doubleClickZoom.disable();
  map.touchZoomRotate.disable();
}

function displayPosition() {
  if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition(getLocation, errorHandler, options);
    disableMapControls();
  } else {
    console.log('Geolocation not supported.');
  }
}
