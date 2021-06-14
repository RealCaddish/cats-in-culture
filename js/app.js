(function () {

  // map options
  const options = {
    center: [35.852, 21.443],
    zoom: 7,
    scrollWheelZoom: true,
    zoomSnap: .1,
    dragging: true,
    zoomControl: false
  }

  // Leaflet map creation
  const map = L.map('map', options);

  // replace zoom control to bottom left 
  L.control.zoom({
    position: 'bottomleft'
  }).addTo(map)

  const tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
  });
  tiles.addTo(map);

  // new function - make slide

  // data call for the archaeological sites 
  $.getJSON("../data/cat_sites.geojson", function (data) {
    
    console.log

    // access the features 

    var archSlide = data.features

    console.log(archSlide)

    var archSitesStyle = {
      radius: 8,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
    // adding data as points to Leaflet map
    L.geoJson(data, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, archSitesStyle); // creating layer with circleMarkers and adding custom options
      }

      // filter the data by slide ID 
      // filter: function(data) {
      // return: L.circleMarker
      // }
    }).addTo(map)
    map.getBounds(), {
      padding: [18, 18] // add padding around the archaeological sites
    };
    // replace drawMap 
    //drawMap(data);

  });

  // data call for territories polygons 
  $.getJSON("../data/territories_joined2.geojson", function (data) {

    console.log(data)
    drawMap(data)
  });

  // draw the map 
  function drawMap(data) {


    const territories = L.geoJson(data, {
      // add hover and touch functionality to each feature layer

      onEachFeature: function (feature, layer) {
        //console.log(layer)
        //when mousing over a layer 
        layer.on('mouseover', function () {
          //change stroke color and bring element to front
          layer.setStyle({
            color: '#ff6e02'
          }).bringToFront();
        });

        // mouse off the layer to reset 
        layer.on('mouseout', function () {
          //reset style 
          layer.setStyle({
            color: '#20282e'
          });
        });
      },
    }).addTo(map)
    map.fitBounds(territories.getBounds(), {
      padding: [18, 18] // add padding around the archaeological sites
    });



    //Leaflet control for title 
    //   L.Control.title = L.Control.extend({
    //     onAdd: function (map) {
    //       var title = L.DomUtil.create('div');
    //       title.id = "title";
    //       text.innerHTML = "<strong> Cats in Culture </strong>"
    //       return title
    //     },
    //     onRemove: function (map) {

    //       // nothing to do here
    //     }

    //   });
    //   L.Control.title = function (opts) {

    //     return new L.Control.title(opts);
    //   }

    //   L.control.title({ position: 'bottomleft' }).addTo(map);
  }
})();
