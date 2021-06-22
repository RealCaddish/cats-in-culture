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
  const map = L.map('map', options);

  // Create panes so points draw correctly above polygons 
  map.createPane("polygonsPane");
  map.createPane("pointsPane;")

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


  let slide= 1;
  let numOfSlides

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
          style: function (feature) {

            switch (feature.properties.NAME) {

              case 'Anglo-Saxon kingdoms': return { color: 'green', fillOpacity: .5 };
              case 'Aragon': return { color: 'yellow', fillOpacity: .5 };
              case 'Asturias': return { color: "#0066FF", fillOpacity: .5 };
              case 'Austrian Empire': return { color: 'pink', fillOpacity: .5 };
              case 'Bulgar Khanate': return { color: "#1fb574", fillOpacity: .5 };
              case 'Byzantine Empire': return { color: 'purple', fillOpacity: .5 };
              case 'Castile': return { color: 'orange', fillOpacity: .5 };
              case 'Carolingian Empire': return { color: 'red', fillOpacity: .5 };
              case 'Celtic kingdoms': return { color: "#5c0a05", fillOpacity: .5 };
              case 'Corsica': return { color: 'green', fillOpacity: .5 };
              case 'Cyprus': return { color: 'green', fillOpacity: .5 };
              case 'Denmark': return { color: "#f74a9e", fillOpacity: .5 };
              case 'Denmark-Norway': return { color: 'red', fillOpacity: .5 };
              case 'Eastern Roman Empire': return { color: "#670BE9", fillOpacity: .5 };
              case 'English territory': return { color: 'green', fillOpacity: .5 };
              case 'Felis lybica': return { color: 'green', fillOpacity: .5 };
              case 'Fertile Crescent': return { color: " #C7509F", fillOpacity: .5 };
              case 'Fivizzano': return { color: 'orange', fillOpacity: .5 };
              case 'France': return { color: 'blue', fillOpacity: .5 };
              case 'Franche-Comté': return { color: 'blue', fillOpacity: .5 };
              case 'Genoa': return { color: 'green', fillOpacity: .5 };
              case 'Georgia': return { color: "#f70a39", fillOpacity: .5 };
              case 'Granada': return { color: "#33CC33", fillOpacity: .5 };
              case 'Gurjara Pratihara': return { color: "#940100", fillOpacity: .6 };
              case 'Hadramaut': return { color: 'red', fillOpacity: .5 };
              case 'Hafsid Caliphate': return { color: "yellow", fillOpacity: .5 };
              case 'Hellenistic States': return { color: 'orange', fillOpacity: .5 };
              case 'Hindu states': return { color: "#E55527", fillOpacity: .5 };
              case 'Holy Roman Empire': return { color: "red", fillOpacity: .5 };
              case 'Hungary': return { color: 'white', fillOpacity: .5 };
              case 'Ilkhanate': return { color: "#11ba82", fillOpacity: .5 };
              case 'Imperial Hungary': return { color: "#05f209", fillOpacity: .5 };
              case 'Ireland': return { color: 'green', fillOpacity: .5 };
              case 'Japan': return { color: 'purple', fillOpacity: .5 };
              case 'Lithuania': return { color: "#a33502", fillOpacity: .5 };
              case 'Lombard dutchies': return { color: 'yellow', fillOpacity: .5 };
              case 'Lombardy': return { color: 'red', fillOpacity: .5 };
              case 'Lucca': return { color: 'blue', fillOpacity: .5 };
              case 'Luxembourg': return { color: "#000000", fillOpacity: .5 };
              case 'Mamluke Sultanate': return { color: 'green', fillOpacity: .5 };
              case 'Massa': return { color: 'green', fillOpacity: .5 };
              case 'Middle Kingdom': return { color: 'green', fillOpacity: .5 };
              case 'Milan': return { color: "#591004", fillOpacity: .5 };
              case 'Modena': return { color: 'brown', fillOpacity: .5 };
              case 'Morocco': return { color: "#BC262C", fillOpacity: .5 };
              case 'Muscat': return { color: "#3b270c", fillOpacity: .5 };
              case 'Naples': return { color: "#fff314", fillOpacity: .5 };
              case 'Netherlands': return { color: 'orange', fillOpacity: .5 };
              case 'New Kingdom': return { color: 'green', fillOpacity: .5 };
              case 'Norway': return { color: "#707317", fillOpacity: .5 };
              case 'Old Kingdom': return { color: 'green', fillOpacity: .5 };
              case 'Ottoman Empire': return { color: "#E30A17", fillOpacity: .5 };
              case 'Pallava state': return { color: 'green', fillOpacity: .5 };
              case 'Pandya state': return { color: "purple", fillOpacity: .5 };
              case 'Papal States': return { color: "#bd5837", fillOpacity: .5 };
              case 'Parma': return { color: 'blue', fillOpacity: .5 };
              case 'Phoenician Administered': return { color: 'blue', fillOpacity: .5 };
              case 'Poland': return { color: "#4f0408", fillOpacity: .5 };
              case 'Pontremoli': return { color: 'green', fillOpacity: .5 };
              case 'Portugal': return { color: "#380b04", fillOpacity: .5 };
              case 'Prussia': return { color: 'red', fillOpacity: .5 };
              case 'Rashtrakuta state': return { color: 'blue', fillOpacity: .5 };
              case 'Riazan': return { color: 'black', fillOpacity: .5 };
              case 'Roman Republic': return { color: 'red', fillOpacity: .5 };
              case 'Sardinia': return { color: 'green', fillOpacity: .5 };
              case 'Sardinia-Piedmont': return { color: 'orange', fillOpacity: .5 };
              case 'Scotland': return { color: "#005EB9", fillOpacity: .5 };
              case 'Seljuk Caliphate': return { color: 'blue', fillOpacity: .5 };
              case 'Serbia': return { color: "#B03a3a", fillOpacity: .5 };
              case 'Sicily': return { color: "#53fc91", fillOpacity: .5 };
              case 'Sinhalese kingdoms': return { color: "#F7B728", fillOpacity: .5 };
              case 'Spain': return { color: 'orange', fillOpacity: .5 };
              case 'Sweden': return { color: "#3d9aeb", fillOpacity: .5 };
              case 'Switzerland': return { color: 'purple', fillOpacity: .5 };
              case 'Teutonic Knights': return { color: "#1a0263", fillOpacity: .5 };
              case 'Trebizond': return { color: 'purple', fillOpacity: .5 };
              case 'Tuscany': return { color: "#3b038a", fillOpacity: .5 };
              case 'Ummayyad Caliphate': return { color: 'orange', fillOpacity: .5 };
              case 'United Kingdom': return { color: 'green', fillOpacity: .5 };
              case 'Venice': return { color: "#6aab8d", fillOpacity: .5 };
              case 'Western Roman Empire': return { color: 'red', fillOpacity: .5 };
              case 'Yemen': return { color: "#0f0947", fillOpacity: .5 };

            }
          }
        }).addTo(map)
      });

    // data call for the archaeological sites 
    $.getJSON("../data/cat_sites.geojson", function (data) {

      // access the features 

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
      numOfSlides = data.features.length
      for (const x of data.features) {
        if (slideNum == x.properties.Slide) {
          const zoom = x.properties.Zoom // zoom function dynamically updates scale based on this value
          console.log(x.properties)
          console.log([x.properties.Lat, x.properties.Lon])
          map.setView([x.properties.Lat, x.properties.Lon], zoom);

          // grab the Description values
          const historyText = x.properties.Description;

          // insert them into the historyBox div element
          document.querySelector("#historyBox").innerHTML = historyText;

          // grab the Title values 
          const historyTitle = x.properties.Title;

          // insert them into the h2 div element
          document.querySelector("#historyTitle").innerHTML = historyTitle;

          // // testing how to add description text to modal content 
          // document.querySelector("modal-content") = historyText;
        }
      }
    })
  }

  const forward = document.querySelector("#forward")
  const backward = document.querySelector("#backward")

  forward.addEventListener('click', function() {
    if (slide < numOfSlides) {
      slide++
      makeSlide(slide)
    }
  })
  backward.addEventListener('click', function() {
    if (slide > 1) {
      slide--
      makeSlide(slide)
    }
  })
})();
