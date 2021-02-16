mapboxgl.accessToken = 'pk.eyJ1IjoicGlzY2luYWRlcGl4ZWwiLCJhIjoiY2trenk1ZzE2MGViYTJ1cG5hbXY1c3A5ZCJ9.lso-cNpB8Id_MW1s6_BM7A';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-43.180046626022985, -22.912791466947173 ], // starting position
  zoom: 12
});

/*
// set the bounds of the map
var bounds = [[-123.069003, 45.395273], [-122.303707, 45.612333]];
map.setMaxBounds(bounds);
*/

// initialize the map canvas to interact with later
var canvas = map.getCanvasContainer();
var j = 0
// an arbitrary start will always be the same
// only the end or destination will change
//var start = [-43.180046626022985, -22.912791466947173 ];



// create a function to make a directions request
function getRoute(start,end) {
 
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    //var start = [-122.662323, 45.523751];
    var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[1] + ',' + start[0] + ';' + end[1] + ',' + end[0] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
  
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
       // otherwise, make a new request
       j = j + 1
       console.log(j)
        map.addLayer({
          id: 'route'+j,
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
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75
          }
        });
       
       
      // add turn instructions here at the end
    };
 
    req.send();

    
  }
 
  
  map.on('load', function() {
    for (var i=0; i< blocoConjunto.length; i++) {
     
      startPoint = blocoConjunto[i].posInicial
      endPoint = blocoConjunto[i].posFinal
     
      getRoute(startPoint, endPoint);
     
      console.log(startPoint,endPoint)

      // Add starting point to the map
    map.addLayer({
      id: 'point' + i,
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
              coordinates: startPoint
            }
          }
          ]
        }
      },
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
          coordinates: endPoint
        }
      }
      ]
    };
    map.addLayer({
      id: 'end'+i,
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
              coordinates: endPoint
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
    getRoute(startPoint,endPoint)
    //getRoute([-122.662323, 45.523751], [-122.677738,45.522458]);
    
  });

 