(function () {

  // Leaflet map creation
  const map = L.map('map')

  map.setView([35.852, 21.443], 2);

  const tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
  });

  tiles.addTo(map)

})();

// The IIFE (Immediately Invoked Function Expression) has the pattern of 

// (function () {
//   statements
// })();