(function () {

  // map options
  const options = {
    center: [35.852, 21.443],
    zoom: 5,
    scrollWheelZoom: true,
    zoomSnap: .1,
    dragging: true,
    zoomControl: true
  }

  // Leaflet map creation
  const map = L.map('map', options);

  const tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
});
tiles.addTo(map);

omnivore.csv('data/cats_sites.csv')
.on('ready', function (e) {
  drawMap(e.target.toGeoJSON());
})
.on('error', function (e) {
  console.log(e.error[0].message);
});

function drawMap(data) {

  const slideOptions = {
    pointToLayer: function (feature, ll) {
      return L.circleMarker(ll, {
        opacity: 1, 
        weight: 2, 
        fillOpacity: 0
      })
    }
  }

  // create map slide layer from geoJson data

  const catSlide = L.geoJson(data, options).addTo(map)

  // fit the bounds of the map to the cat slides 
  map.fitBounds(catSlide.getBounds());

  //adjust zoom level of map 
  map.setZoom(map.getZoom() - 4); 

  catSlide.setStyle({
    color: '#D96D02'
  }); 


}


})();
