/**
 * Mapbox Marker
 * Add a marker upon user click
 * Remove any existing marker before adding one
 */

// Track marker so that we can remove on the next user click
var marker;

function addMarker(map, lngLat) {

  // Remove existing marker
  if (marker) {
    marker.remove();
  }

  // Add marker on user click
  marker = new mapboxgl.Marker()
    .setLngLat(lngLat)
    .addTo(map)
  ;

}

module.exports = addMarker;
