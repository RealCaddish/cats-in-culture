(function () {

  // map options
  const options = {
    center: [35.852, 21.443],
    scrollWheelZoom: true,
    zoomSnap: .1,
    dragging: true,
    zoomControl: false
  }

  // Leaflet map creation
  const map = L.map('map', options)


  // replace zoom control to bottom left 
  L.control.zoom({
    position: 'bottomleft'
  }).addTo(map)

  

  // add basemap tiles layer 
  const tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
  });
  tiles.addTo(map);


  const slide = 22; 

  // // new function - make slide
  makeSlide(slide)

  function makeSlide(slideNum) {
  // data call for territories polygons 
  const ter = $.getJSON("../data/territories_joined2.json", 
  function (data) {

    L.geoJson(data, {
      filter: function (feature) {
        if (slideNum == feature.properties.Slide_number) {
          return feature
        }
      }
    }).addTo(map)
  });

  // data call for the archaeological sites 
  $.getJSON("../data/cat_sites.geojson", function (data) {

    // access the features 
    var archSlide = data.features

    console.log(archSlide)

    const archSitesStyle = {
      radius: 8,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
    // adding data as points to Leaflet map
    L.geoJson(data, {
      filter: function (feature) {
        if (slideNum == feature.properties.Slide_ID) {
          return feature
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, archSitesStyle); // creating layer with circleMarkers and adding custom options
      }
    }).addTo(map)
  })

  $.getJSON("../data/cat_slides.geojson", function (data) {

    console.log(data)
    for (const x of data.features) {
      if (slideNum == x.properties.Slide) {
        const zoom = x.properties.Zoom
        console.log(x.properties)
        console.log([x.properties.Lat, x.properties.Lon])
        map.setView([x.properties.Lat, x.properties.Lon], zoom)
      }
    }
  })

// dynamically update text box with historic contents 
// add box to map 
// const storyControl = L.control({
//   position: 'bottomright'
// });

// storyControl.onAdd = function (map) {
  
//   const controls = L.DomUtil.get("historyBox")

//   L.DomEvent.disableScrollPropagation(controls)
//   L.DomEvent.disableClickPropagation(controls)

//   return controls
// }
// storyControl.addTo(map)

  }


// iterate through slides 


})();
