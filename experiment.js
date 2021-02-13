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

function agetRoute(end) {
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








/************

let starts = []
function getStarts() {
    for (var i=0; i<blocoConjunto.length; i++) {
        starts.push(blocoConjunto[i].posInicial);
        return starts
    }
}



function getRoute(end) {
    // make a directions request using cycling profile
   
    for (var i=0; i<starts.length; i++) {

        var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + starts[i][0] + ',' + starts[i][1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + accessToken;
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
    }   
}















***********/





//onde o mapa começa centralizado
const centerLong = -43.180046626022985
const centerLat = -22.912791466947173 
const zoom = 15
var startPoint
var endPoint

var req
var rotasConjunto = []

//meu token mapbox
let accessToken = 'pk.eyJ1IjoicGlzY2luYWRlcGl4ZWwiLCJhIjoiY2trenk1ZzE2MGViYTJ1cG5hbXY1c3A5ZCJ9.lso-cNpB8Id_MW1s6_BM7A'

mapboxgl.accessToken = accessToken;
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [centerLong, centerLat], // starting position
  zoom: zoom
});
            /*
            // set the bounds of the map
            var bounds = [[-123.069003, 45.395273], [-122.303707, 45.612333]];
            map.setMaxBounds(bounds);
            */

// initialize the map canvas to interact with later
var canvas = map.getCanvasContainer();


function mapping() {
    for (var i=0; i< blocoConjunto.length; i++) {
        startPoint = blocoConjunto[i].posInicial
        endPoint = blocoConjunto[i].posFinal
        getRoute(endPoint)  

          // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
          //faz requests para todos os blocos
         // console.log(rotasConjunto[i])    
    }  

    for (var j =0; j<rotasConjunto.length;j++) {
        console.log(rotasConjunto[j])
        req = new XMLHttpRequest();
        req.open('GET', rotasConjunto[j], true);
        req.onload = function() {
            var json = JSON.parse(req.response);
            console.log(json)
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
        req.send();}
     
   
    //console.log(rotasConjunto)
    //TRAÇAR QUANTAS ROTAS TIVER FEITO NO GETROUTE
    //OBS NÃO FUNCIONANDO
    
       
    
    console.log('Rotas definidas')
}





function getRoute(end) {
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    var start = startPoint;
    var url = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + start[1] + ',' + start[0] + ';' + end[1] + ',' + end[0] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

    //conjunto de rotas(url) 
    rotasConjunto.push(url) 
    
  }
  

 
  
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
    // this is where the code from the next step will go
  });
  