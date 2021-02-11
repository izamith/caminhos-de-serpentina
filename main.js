var imagemMapa
let lat= -122.4241
let long = 37.78
let incline = 0 
let mapHeigth = 512
let mapWidth = 1024
let accessToken = 'pk.eyJ1IjoicGlzY2luYWRlcGl4ZWwiLCJhIjoiY2trenk1ZzE2MGViYTJ1cG5hbXY1c3A5ZCJ9.lso-cNpB8Id_MW1s6_BM7A'
let zoom = 15 

function preload() {
    imagemMapa = loadImage('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/' + lat + ',' + long + ',' + zoom + ',' + incline + ',' + incline + '/' + mapWidth + 'x' + mapHeigth + '?access_token=' + accessToken)
}

function setup() {
    createCanvas(1024,512);
    image(imagemMapa, 0,0)
}
