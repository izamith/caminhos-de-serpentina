/* caminhos de serpentina, 2021
piscinadepixel, Isabela Zamith */

/* FAZER O GETROUTE E O DESENHO DO MAPA */

console.log('javascript ok')

//variáveis globais
//meu token mapbox
let accessToken = 'pk.eyJ1IjoicGlzY2luYWRlcGl4ZWwiLCJhIjoiY2trenk1ZzE2MGViYTJ1cG5hbXY1c3A5ZCJ9.lso-cNpB8Id_MW1s6_BM7A'

var map
//armazenamento de dados da tabela
let blocos = []
let rotaInicio = []
let rotaFim = []
let table
//onde o mapa começa centralizado
const centerLong = -43.180046626022985
const centerLat = -22.912791466947173 
const zoom = 12

let blocoConjunto = []
var fieldsIn 

//carrega os dados em variaveis
async function getData() {
    //carrega a tabela do arquivo csv
    const response = await fetch('docs/data.csv');
    //nome,inicio,fim
    const data = await response.text();
    //debug
        //console.log(data);

    //pega cada linha da tabela até onde acaba (enter), pode ser
    //'\n' ou '\r', vai depender da tabela, checar antes
    //como tá gerando os csv
    //.slice "corta" o cabeçalho do array (row[0]), pq
    //coloquei pra começar no 1
    table = data.split('\r').slice(1);

    //debug
        //console.log(table);
    dataCollection()
}

function dataCollection(){
    //pegar cada elemento(elt) de cada linha(row)
    //loop
    table.forEach(row=> {
        //pega cada linha até onde vai ","
        //coluna
        const columns = row.split(',');
        //elemento 0 da linha
        const nomeBloco = columns[0];
        //coloca cada area numa array "xareas"
        blocos.push(nomeBloco);

        //elemento 1 da linha
        const inicioBloco = columns[1];
        rotaInicio.push(inicioBloco);
        // ...
        const fimBloco = columns[2];
        rotaFim.push(fimBloco);
       
        //debug
            //console.log(blocos,rotaInicio,rotaFim);
           
        });

    //passar por todos os blocos
    for (var i = 0; i<blocos.length; i++) {
        var blocoi
        //formato da rota de inicio e fim no csv está [LONG LAT]
        //primeiro precisa remover os [] (primeiro e ultimos caracteres)
        var j = (rotaInicio[i])
        var resultInicial = j.substring(1, j.length-1);

        //DIVIDIR EM DOIS INICIAL
        //divide no espaço e coloca no array fields
        var fieldsIn = resultInicial.split(' ');

        var k = (rotaFim[i])
        var resultFinal 
            //alguns não tem final e ficam undefined na tabela
            if (typeof k !=='undefined') {
                 resultFinal = k.substring(1, k.length-1);
                 //DIVIDIR EM DOIS FINAL
                //divide no espaço e coloca no array fields
                var fieldsFi = resultFinal.split(' ');

                //cada bloco é um objeto com nome e coordenadas iniciais e finais
                blocoi = new Bloco(blocos[i],fieldsIn,fieldsFi)
            }
            else {
                 //cada bloco é um objeto com nome e coordenadas iniciais e finais
                 blocoi = new Bloco(blocos[i],fieldsIn,fieldsIn)
            }
            blocoConjunto.push(blocoi)
           
          
       
        //console.log('O bloco '+ blocos[i]+ ' sai de ' + rotaInicio[i] + ' e vai até ' + rotaFim[i])
    }
    //console.log(blocoConjunto)
}

//funcao construtora de objetos BLOCO
function Bloco(nome, posInicial, posFinal) {
    this.nome = nome;
    this.posInicial = posInicial;
    this.posFinal = posFinal;
  }


function mapping() {
    mapboxgl.accessToken = accessToken;
    map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [centerLong, centerLat], // starting position [lng, lat]
    zoom: zoom // starting zoom
    });

    /* GETROUTE AQUI */
     // initialize the map canvas to interact with later
     var canvas = map.getCanvasContainer();
   for (var i=0; i<blocoConjunto.length; i++) {
       //console.log(blocoConjunto[i].posFinal)
       
       var start = blocoConjunto[i].posInicial
       var end = blocoConjunto[i].posFinal

       //console.log(start, end);

        var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + parseInt(start[0]) + ',' + parseInt(start[1]) + ';' + parseInt(end[0]) + ',' + parseInt(end[1]) + '?steps=true&geometries=geojson&access_token=' + accessToken
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
        } 
        else { // otherwise, make a new request
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
}

req.send();

    }  
}



async function Start() {
    await getData();
    mapping();
}