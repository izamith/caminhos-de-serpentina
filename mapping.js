mapboxgl.accessToken = 'pk.eyJ1IjoicGlzY2luYWRlcGl4ZWwiLCJhIjoiY2trenk1ZzE2MGViYTJ1cG5hbXY1c3A5ZCJ9.lso-cNpB8Id_MW1s6_BM7A';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-43.180046626022985, -22.912791466947173], // starting position
  zoom: 9.5
});

// initialize the map canvas to interact with later
var canvas = map.getCanvasContainer();
var start = [[-43.180046626022985, -22.912791466947173],[-43.280046626022980, -22.912791466947173]]
var theStart 
var coords

map.on('load', function() { 
    map.addSource('national-park', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[0]
                    } 
                    
                },

                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[1]
                    } 
                    
                },
            ]
        }
    })
    // make an initial directions request that
    // starts and ends at the same location
    // getRoute(start);

    // Add starting point to the map
    map.addLayer({
      id: 'point',
      type: 'circle',
      source: 'national-park' ,
      paint: {
        'circle-radius': 10,
        'circle-color': '#3887be'
      }
    });

    var end = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: coords
        }
      }
      ]
    };
    if (map.getLayer('end')) {
      map.getSource('end').setData(end);
    } else {
      map.addLayer({
        id: 'end',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: coords
              }
            }]
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#f30'
        }
      });
    }
    getRoute(coords);
  });




function createStart(i) {
    // an arbitrary start will always be the same
    // only the end or destination will change
    var start = getStart(i)
    coords = getEnd(i)
    theStart = getStart(i);
    console.log(start)
  }

// create a function to make a directions request
function getRoute(end) {
  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  
  var url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + theStart[1] + ',' + theStart[0] + ';' + end[1] + ',' + end[0] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

  // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.onload = function() {
    var json = JSON.parse(req.response);
    var data = json.routes[0];
    var route = data.geometry.coordinates;
    var geojson = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    };
    // if the route already exists on the map, reset it using setData
    if (map.getSource('route')) {
      map.getSource('route').setData(geojson);
    } else { // otherwise, make a new request
      map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: geojson
            }
          }
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#FF0000',
          'line-width': 5,
          'line-opacity': 0.75
        }
      });
    }
    // add turn instructions here at the end
  };
  req.send();
}









//////////////////////////////HELPER FUNCTIONS//////////////////////////////////
    //criar posição inicial do bloco
function getStart(positionBloco) {
    var start = blocoConjunto[positionBloco].posInicial
    return start  
  }

    //criar posição final do bloco
  function getEnd(positionBloco) {
    var end = blocoConjunto[positionBloco].posFinal
    return end
  }