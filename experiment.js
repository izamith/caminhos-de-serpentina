let accessToken = 'pk.eyJ1IjoicGlzY2luYWRlcGl4ZWwiLCJhIjoiY2trenk1ZzE2MGViYTJ1cG5hbXY1c3A5ZCJ9.lso-cNpB8Id_MW1s6_BM7A'

//-22.912791466947173, -43.180046626022985 START
//-22.908760525072285, -43.187279242122656 END
let long= -43.180046626022985
let lat = -22.912791466947173 
let longlong = -43.187279242122656
let latlat= -22.908760525072285
let zoom = 15
let startPoint = [long, lat]
let endPoint = [longlong,latlat]
var map


function mapping() {
    mapboxgl.accessToken = accessToken;
    map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [long, lat], // starting position [lng, lat]
    zoom: zoom // starting zoom
    });

   
    // initialize the map canvas to interact with later
    var canvas = map.getCanvasContainer();

    var start = startPoint

    getRoute(endPoint) 
    
}

function getRoute(end) {
    // make a directions request using cycling profile
   
    var start = startPoint;
    var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + accessToken;
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
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75
          }
        });
    }
    // add turn instructions here at the end
  };
  req.send();

  map.on('load', function() {
    // make an initial directions request that
    // starts and ends at the same location
    getRoute(endPoint);
  
    // Add starting point to the map
    map.addLayer({
      id: 'point',
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
              coordinates: start
            }
          }
          ]
        }
      },
      paint: {
        'circle-radius': 20,
        'circle-color': '#3887be'
      }
    });
    // this is where the code from the next step will go
  });
}



