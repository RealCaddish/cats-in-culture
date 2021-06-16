(function () {

  // map options
  const options = {
    center: [35.852, 21.443],
    scrollWheelZoom: true,
    zoomSnap: .1,
    dragging: true,
    zoomControl: false
  };

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


  const slide = 18;

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
          },
          style: function(feature) {
            switch (feature.properties.NAME) {
            
          
              case 'Anglo-Saxon kingdoms': return {color: 'green', fillOpacity: .5};
              case 'Aragon': return {color: 'blue', fillOpacity: .5};
              case 'Asturias': return {color: "#0066FF", fillOpacity: .5};
              case 'Austrian Empire': return { color: 'green', fillOpacity: .5};
              case 'Bulgar Khanate': return {color: 'green', fillOpacity: .5}; 
              case 'Byzantine Empire': return {color: 'orange', fillOpacity: .5};

              
              case 'Carolingian Empire': return {color: 'red', fillOpacity: .5};
              case 'Castile': return {color: 'blue', fillOpacity: .5};
              case 'Celtic kingdoms': return {color: 'green', fillOpacity: .5};
              case 'Corsica': return { color: 'green', fillOpacity: .5};
              case 'Cyprus': return {color: 'green', fillOpacity: .5}; 
              case 'Denmark': return {color: 'orange', fillOpacity: .5};

              
              case 'Denmark-Norway': return {color: 'red', fillOpacity: .5};
              case 'Eastern Roman Empire': return {color: "#670BE9", fillOpacity: .5};
              case 'English territory': return {color: 'green', fillOpacity: .5};
              case 'Felis lybica': return { color: 'green', fillOpacity: .5};
              case 'Fertile Crescent': return {color: " #C7509F", fillOpacity: .5}; 
              case 'Fivizzano': return {color: 'orange', fillOpacity: .5};

            
              case 'France': return {color: 'red', fillOpacity: .5};
              case 'Franche-Comté': return {color: 'blue', fillOpacity: .5};
              case 'Genoa': return {color: 'green', fillOpacity: .5};
              case 'Georgia': return { color: 'green', fillOpacity: .5};
              case 'Granada': return {color: 'green', fillOpacity: .5}; 
              case 'Gurjara Pratihara': return {color: 'orange', fillOpacity: .5};

              case 'Hadramaut': return {color: 'red', fillOpacity: .5};
              case 'Hafsid Caliphate': return {color: 'blue', fillOpacity: .5};
              case 'Hellenistic States': return {color: 'orange', fillOpacity: .5};
              case 'Hindu states': return { color: 'green', fillOpacity: .5};
              case 'Holy Roman Empire': return {color: 'green', fillOpacity: .5}; 
              case 'Hungary': return {color: 'orange', fillOpacity: .5};

              case 'Ilkhanate': return {color: 'red', fillOpacity: .5};
              case 'Imperial Hungary': return {color: 'blue', fillOpacity: .5};
              case 'Ireland': return {color: 'green', fillOpacity: .5};
              case 'Japan': return { color: 'green', fillOpacity: .5};
              case 'Lithuania': return {color: 'green', fillOpacity: .5}; 
              case 'Lombard dutchies': return {color: 'orange', fillOpacity: .5};

              case 'Lombardy': return {color: 'red', fillOpacity: .5};
              case 'Lucca': return {color: 'blue', fillOpacity: .5};
              case 'Luxembourg': return {color: 'green', fillOpacity: .5};
              case 'Mamluke Sultanate': return { color: 'green', fillOpacity: .5};
              case 'Massa': return {color: 'green', fillOpacity: .5}; 
              case 'Middle Kingdom': return {color: 'green', fillOpacity: .5};

              case 'Milan': return {color: 'red', fillOpacity: .5};
              case 'Modena': return {color: 'blue', fillOpacity: .5};
              case 'Morocco': return {color: 'green', fillOpacity: .5};
              case 'Muscat': return { color: 'green', fillOpacity: .5};
              case 'Naples': return {color: 'green', fillOpacity: .5}; 
              case 'Netherlands': return {color: 'orange', fillOpacity: .5};

              case 'New Kingdom': return {color: 'green', fillOpacity: .5};
              case 'Norway': return {color: 'blue', fillOpacity: .5};
              case 'Old Kingdom': return {color: 'green', fillOpacity: .5};
              case 'Ottoman Empire': return { color: 'green', fillOpacity: .5};
              case 'Pallava state': return {color: 'green', fillOpacity: .5}; 
              case 'Pandya state': return {color: 'orange', fillOpacity: .5};

              case 'Papal States': return {color: 'red', fillOpacity: .5};
              case 'Parma': return {color: 'blue', fillOpacity: .5};
              case 'Phoenician Administered': return {color: 'blue', fillOpacity: .5};
              case 'Poland': return { color: 'green', fillOpacity: .5};
              case 'Pontremoli': return {color: 'green', fillOpacity: .5}; 
              case 'Portugal': return {color: 'orange', fillOpacity: .5};

              case 'Prussia': return {color: 'red', fillOpacity: .5};
              case 'Rashtrakuta state': return {color: 'blue', fillOpacity: .5};
              case 'Riazan': return {color: 'green', fillOpacity: .5};
              case 'Roman Republic': return { color: 'red', fillOpacity: .5};
              case 'Sardinia': return {color: 'green', fillOpacity: .5}; 
              case 'Sardinia-Piedmont': return {color: 'orange', fillOpacity: .5};

              case 'Scotland': return {color: 'red', fillOpacity: .5};
              case 'Seljuk Caliphate': return {color: 'blue', fillOpacity: .5};
              case 'Serbia': return {color: 'green', fillOpacity: .5};
              case 'Sicily': return { color: 'green', fillOpacity: .5};
              case 'Sinhalese kingdoms': return {color: 'green', fillOpacity: .5}; 
              case 'Spain': return {color: 'orange', fillOpacity: .5};

              case 'Sweden': return {color: 'red', fillOpacity: .5};
              case 'Switzerland': return {color: 'blue', fillOpacity: .5};
              case 'Teutonic Knights': return {color: 'green', fillOpacity: .5};
              case 'Trebizond': return { color: 'green', fillOpacity: .5};
              case 'Tuscany': return {color: 'green', fillOpacity: .5}; 
              case 'Umayyad Caliphate': return {color: 'orange', fillOpacity: .5};

              case 'United Kingdom': return {color: 'red', fillOpacity: .5};
              case 'Venice': return {color: 'blue', fillOpacity: .5};
              case 'Western Roman Empire': return {color: 'red', fillOpacity: .5};
              case 'Yemen': return { color: 'green', fillOpacity: .5};
              
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

      for (const x of data.features) {
        if (slideNum == x.properties.Slide) {
          const zoom = x.properties.Zoom // zoom function dynamically updates scale based on this value
          console.log(x.properties)
          console.log([x.properties.Lat, x.properties.Lon])
          map.setView([x.properties.Lat, x.properties.Lon], zoom)
        }
      }
    })
  }
})();
