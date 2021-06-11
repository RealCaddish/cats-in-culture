(function () {



  // map options
  const options = {
    center: [35.852, 21.443],
    zoom: 7,
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

  // omnivore.csv('data/cats_sites.csv')
  // .on('ready', function (e) {
  //   drawMap(e.target.toGeoJSON());
  // })
  // .on('error', function (e) {
  //   console.log(e.error[0].message);
  // });

  // data call for archaeological site points 

  $.getJSON("../data/cat_sites.geojson", function (data) {

    console.log(data)

    drawMap(data);
  });

  // data call for territories polygons 
  // var territories1 = $.getJSON("../data/territories.geojson", function (data1) {

  //drawMap(data1)
  // }); 

  function drawMap(data) {
    const archCatSite = L.geoJson(data, {

      style: function (feature) {
        return {
          color: '#20282e',
          weight: 2,
          fillOpacity: 1,
          fillColor: '#1f78b4'
        };
      
      },
      // add hover and touch functionality to each feature layer

      onEachFeature: function (feature, layer) {

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
    map.fitBounds(archCatSite.getBounds(), {
      padding: [18, 18] // add padding around the archaeological sites
    });

    const territories = L.geoJson(data1, {

      style: function (feature) {
        return {
          color: '#20282e',
          weight: 2,
          fillOpacity: 1,
          fillColor: '#1f78b4'
        };
      
      },
      
      // add hover and touch functionality to each feature layer

      onEachFeature: function (feature, layer) {

        console.log(layer)
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


  }


})();
