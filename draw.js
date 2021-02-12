/*
const startPoint = [centerLong,centerLat]
const endPoint = [centerLat,centerLong]
*/ 











    


function getRoute(end) {
    // make a directions request using cycling profile
  
    var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + startPoint[0] + ',' + startPoint[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + accessToken;
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
              coordinates: endPoint
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