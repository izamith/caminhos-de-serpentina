mapboxgl.accessToken = 'pk.eyJ1IjoicGlzY2luYWRlcGl4ZWwiLCJhIjoiY2trenk1ZzE2MGViYTJ1cG5hbXY1c3A5ZCJ9.lso-cNpB8Id_MW1s6_BM7A';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-43.180046626022985, -22.912791466947173], // starting position
  zoom: 9.5
});

// initialize the map canvas to interact with later
var canvas = map.getCanvasContainer();
var start = []
var final = []
var rotas = []

var urlConjunto = []


var theStart 
var coords

requests=new Array(blocoConjunto.length);

map.on('load', async function() { 
    
    for (var i =0; i<blocoConjunto.length; i++) {
        var inicio = []
        //precisa ser trocado pq eu coletei ao contrário
        inicio.push(blocoConjunto[i].posInicial[1])
        inicio.push(blocoConjunto[i].posInicial[0])
        start.push(inicio)

        var fim = []
        fim.push(blocoConjunto[i].posFinal[1])
        fim.push(blocoConjunto[i].posFinal[0])
        final.push(fim)
    }

   await getRoute();

    map.addSource('blocos-inicio', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            //Preciso fazer isso de outro jeito que não seja tão hardcoded,
            //foor loop não funciona aqui dentro, mas se fizer fora não consigo
            //acessar de dentro da feature collection
            //tinha que ser algo do tipo features.push()....
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
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[2]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[3]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[4]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[5]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[6]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[7]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[8]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[9]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[10]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[11]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[12]
                    } 
                    
                }
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
      source: 'blocos-inicio' ,
      paint: {
        'circle-radius': 10,
        'circle-color': '#3887be'
      }
    });

   
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
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[0]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[1]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[2]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[3]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[4]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[5]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[6]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[7]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[8]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[9]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[10]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[11]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[12]
                    }
                },
            ]
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#f30'
        }
      });
    }
    getRoute();
  });



// create a function to make a directions request
function getRoute() {

 
}
  


       
        /*



  for (var i=0; i<blocoConjunto.length;i++) {
    var pointA = start[i]
    var pointB = final[i]
    var url = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + pointA[0] + ',' + pointA[1] + ';' + pointB[0] + ',' + pointB[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
    // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    requests[i] = new XMLHttpRequest();
    requests[i].open("GET", url, true);
    console.log(requests[i])
    req=requests[i]
    req.onload = function() {
        var json = JSON.parse(req.response);
        var data = json.routes[0];
        var route = data.geometry.coordinates;
        var geojson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: route
                    }
                },
    
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: route
                    }
                }
            ]
    
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
  }
  req.send();
}
        */

/*
  req.onload = function() {
        var json = JSON.parse(req.response);
        var data = json.routes[0];
        var route = data.geometry.coordinates;

        var geojson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: route
                    }
                },

                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: route
                    }
                }
            ]
 
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
  }
  
  
*/
 



function line() {
    
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