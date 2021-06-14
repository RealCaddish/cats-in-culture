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

  makeSlide(1)

  function makeSlide(slideNum) {

    // data call for territories polygons 
    const ter = $.getJSON("../data/territories_joined.geojson", function (data) {

      L.geoJson(data, {
        filter: function (feature) {
          if (slideNum == feature.properties.Slide_number) {
            return feature
          }
        }
      }).addTo(map)
    });


    $.getJSON("../data/cat_sites.geojson", function (data) {

      const archSlide = data.features

      console.log(archSlide)

      const archSitesStyle = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };

      L.geoJson(data, {
        filter: function (feature) {
          if (slideNum == feature.properties.ID) {
            return feature
          }
        },
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, archSitesStyle); // creating layer with circleMarkers and adding custom options
        }
      }).addTo(map)
    })

    const zoom = 10

    $.getJSON("../data/cat_slides.geojson", function (data) {
       for (const x of data.features) {
        if (slideNum == x.properties.Slide) {
          console.log(x.properties)
          console.log([x.properties.Lat, x.properties.Lon])
          map.setView([x.properties.Lat, x.properties.Lon], zoom)
        }
       }

    })
  }

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
