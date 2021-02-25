mapboxgl.accessToken = 'pk.eyJ1IjoicGlzY2luYWRlcGl4ZWwiLCJhIjoiY2trenk1ZzE2MGViYTJ1cG5hbXY1c3A5ZCJ9.lso-cNpB8Id_MW1s6_BM7A';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-43.4000, -22.9100], // starting position
  zoom: 10.5
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
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[13]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[14]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[15]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[16]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[17]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[18]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[19]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[20]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[21]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[22]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[23]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[24]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[25]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[26]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[27]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[28]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[29]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[30]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[31]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[32]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[33]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[34]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[35]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[36]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[37]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[38]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[39]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[40]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[41]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[42]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[43]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[44]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[45]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[46]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[47]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[48]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[49]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[50]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[51]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[52]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[53]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[54]
                    } 
                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Point',
                    'coordinates': start[55]
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
      source: 'blocos-inicio' ,
      paint: {
        'circle-radius': 7,
        'circle-color': '#7A04FF'
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
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[13]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[14]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[15]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[16]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[17]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[18]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[19]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[20]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[21]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[22]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[23]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[24]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[25]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[26]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[27]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[28]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[29]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[30]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[31]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[32]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[33]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[34]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[35]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[36]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[37]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[38]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[39]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[40]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[41]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[42]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[43]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[44]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[45]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[46]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[47]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[48]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[49]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[50]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[51]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[52]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[53]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[54]
                    }
                },
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: final[55]
                    }
                },
            ]
          }
        },
        paint: {
          'circle-radius': 7,
          'circle-color': '#EC3600'
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